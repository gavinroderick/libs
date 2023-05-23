import * as Router from 'koa-router';
import { Logger } from 'winston';
import { EndpointHandler } from './EndpointHandler';

export const ostorageEndpointHandler = new EndpointHandler('ostorage');

export class ObjectDownloadReqHandler {
  logger: Logger;
  listen: any;
  cfg: any;
  entities: any;
  listening = false;
  idsClient: any;
  constructor(logger: Logger, cfg: any) {
    this.logger = logger;
    this.cfg = cfg;
    const router = new Router();

      router.get(/^\/storage\/([^/]+)\/(.+)/, async (ctx: any, next: any) => {
        if ((cfg.get('buckets') || []).indexOf(ctx.params[0]) == -1) {
          return logger.info('Invalid bucket name');
        }
        const authToken = ctx.request.header['authorization'];
        let token;
        if (authToken && authToken.startsWith('Bearer ')) {
          token = authToken.split(' ')[1];
          const dbSubject = await this.idsClient.findByToken({ token });
          ctx.subject = { token, id: dbSubject?.payload?.id };
          ctx.subject = { token };
        }
        const bucket = ctx.params[0];
        const key = ctx.params[1];
        await EndpointHandler.handleGetFile(bucket, key, ctx);
        return ctx.response;
      });
  }
}
