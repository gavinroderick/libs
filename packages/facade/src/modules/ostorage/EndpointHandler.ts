import { builder } from './builder';
import logger from './logger';
import { OstorageSrvGrpcClient } from "./grpc";
import { Transform } from 'stream';
import { isEmpty } from 'lodash';
import { createServiceConfig } from '@restorecommerce/service-config';

const cfg = createServiceConfig(process.cwd());

export class EndpointHandler {
  resourceName: any;

  constructor(resourceName?: any) {
    this.resourceName = resourceName;
  }

  getResourceService() {
    // List of services for resources available
    const options = builder.getMicroservices();
    const mapValue = options.microservice.mapClients.get(this.resourceName);
    let resourceService = options.microservice.service[mapValue];
    if (!resourceService) {
      resourceService = options.microservice.service[this.resourceName];
    }
    return resourceService;
  }

  static dlQueryParamExist(ctx: any): boolean {
    // check if URL contains query parameter 'dl'
    let filePath, hostName;
    if (ctx && ctx.request && ctx.request.url) {
      filePath = ctx.request.url;
    }
    if (ctx && ctx.request && ctx.request.header
      && ctx.request.header.host) {
      hostName = ctx.request.header.host;
    }
    const completeUrl = 'http://' + hostName + filePath;
    const reqURL = new URL(completeUrl);
    return reqURL.searchParams.has('dl');
  }

  static async handleGetFile(bucket: string, key: string, ctx: any): Promise<any> {
    let download = false;
    download = this.dlQueryParamExist(ctx);
    // get the target orgKey from the ostorage meta and set it before making ACS request
    let req: any = { bucket, key, download };
    logger.debug('Received download request', { bucket, key });
    const grpcConfig = cfg.get('client:ostorage');
    const client = new OstorageSrvGrpcClient(grpcConfig, {...grpcConfig,logger});
    const ostorageSrv = client['ostorage'];
    req = { bucket, key, download, subject: ctx.subject };
    let grpcGetStream = await ostorageSrv.get(req);
    let streamData: any = {
      key: '', object: {}, url: '', options: {}
    };

    grpcGetStream.on('error', (err: { message: string | string[]; code: number; }) => {
      if (err.message.includes('NotFound')) {
        err.code = 404;
      } else if (err.message.includes('PermissionDenied')) {
        err.code = 403;
      } else {
        err.code = 500;
      }
      ctx.response.status = err.code;
      logger.error('Error streaming request', { message: err.message });
      ctx.res.end(err.message);
    });

    grpcGetStream.on('end', (data: any) => {
      ctx.response.status = 200;
      logger.info(`File ${key} download completed successfully from bucket ${bucket}`);
    });

    const transformGrpcObjToBuffer = () => {
      return new Transform({
        objectMode: true,
        transform: (chunk, _, done) => {
          // set options if its not set already
          if (isEmpty(streamData.options)) {
            streamData.options = chunk.response?.payload?.options;
            // set Last-Modified
            if (chunk?.response?.payload?.meta?.modified) {
              ctx.response.set('Last-Modified', new Date(chunk?.response?.payload?.meta?.modified));
            }
            if (!streamData.options) {
              logger.silly(`File ${key} from bucket ${bucket} does have empty options`, streamData.options);
            } else {
              // set response headers on ctx response received from ostorage-srv
              let {
                encoding,
                content_type,
                content_language,
                content_disposition,
                length,
                version,
                md5
              } = streamData.options;
              if (encoding) {
                ctx.response.set('Content-Encoding', encoding);
              }
              if (content_type) {
                ctx.response.set('Content-Type', content_type);
              }
              if (content_language) {
                ctx.response.set('Content-Language', content_language);
              }
              const name = streamData.key;
              if (content_disposition) {
                ctx.response.set('Content-Disposition', `${content_disposition};filename=${name}`);
              }
              if (length) {
                ctx.response.set('Content-Length', length);
              }
              if (version) {
                ctx.response.set('ETag', version);
              }
              if (md5) {
                ctx.response.set('Content-MD5', md5);
              }
            }
          }
          // object buffer
          if (chunk.response?.status?.code && chunk.response?.status.code != 200) {
            ctx.response.status = chunk.response.status.code;
            logger.error('Error streaming request', { message: chunk.response });
            ctx.res.end(chunk.response.status.message);
          }
          done(null, chunk?.response?.payload?.object);
        }
      });
    };

    // assigning the grpcStream object through transform to Koa ctx response
    ctx.response.body = grpcGetStream.pipe(transformGrpcObjToBuffer());

    if (streamData.error && streamData.error.message) {
      ctx.response.status = 404;
      ctx.response.body = 'Object does not exist';
      return;
    }
    return ctx.response;
  }
}
