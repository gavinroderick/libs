import { createServiceConfig } from '@restorecommerce/service-config';
import { createLogger } from '@restorecommerce/logger';
import { isNumber } from 'util';

const cfg = createServiceConfig(process.cwd());
const loggerCfg = cfg.get('logger');

let logger = createLogger(loggerCfg);

const dlQueryParamExist = (ctx: any): boolean => {
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
};

export const handleGetFile = async (bucket: string, key: string, ctx: any, client: any): Promise<any> => {
  try {
    let download = false;
    download = dlQueryParamExist(ctx);
    // get the target orgKey from the ostorage meta and set it before making ACS request
    let req: any = { bucket, key, download };
    logger.debug('Received download request', { bucket, key });
    const ostorageSrv = client['ostorage'];
    req = { bucket, key, download, subject: ctx.subject };
    let grpcGetStream = await ostorageSrv.get(req);

    let streamResponse: any;
    for await (const data of grpcGetStream) {
      streamResponse += data;
    }
    if (streamResponse) {
      streamResponse = JSON.parse(streamResponse);
    }

    const setResponseHeaders = (response: any) => {
      if (response?.response?.payload?.meta?.modified) {
        ctx.response.set('Last-Modified', new Date(response?.response?.payload?.meta?.modified));
      }
      if (!response?.response?.payload?.options) {
        logger.debug(`Object ${key} from bucket ${bucket} does not have options`);
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
        } = response?.response?.payload?.options;
        if (encoding) {
          ctx.response.set('Content-Encoding', encoding);
        }
        if (content_type) {
          ctx.response.set('Content-Type', content_type);
        }
        if (content_language) {
          ctx.response.set('Content-Language', content_language);
        }
        const name = response?.response?.payload?.key;
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
    };

    // add status
    if (streamResponse?.response?.status?.code != 200) {
      logger.error('Error downloading file', { status: streamResponse?.response?.status });
    } else if (streamResponse?.response?.status?.code === 200) {
      // assigning the grpcStream object through transform to Koa ctx response
      setResponseHeaders(streamResponse);
      logger.info(`Successfully downloaded file ${key}`);
    }
    ctx.response.body = streamResponse?.response?.payload?.object;
    ctx.response.status = streamResponse?.response?.status?.code ? streamResponse?.response?.status?.code : 500;
    return ctx.response;
  } catch (error) {
    logger.error(`Error downloading file ${key}`, { code: (error as any).code, message: (error as any).message, stack: (error as any).stack });
    ctx.response.body = (error as any).message;
    ctx.response.status = isNumber((error as any).code) ? (error as any).code : 500;
    return ctx.response;
  }
};