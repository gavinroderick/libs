import { FederatedOstorageSchema } from './gql/federation';
import { namespace, OstorageConfig, OstorageModule } from "./interfaces";
import { OstorageSrvGrpcClient } from "./grpc";
import { createFacadeModuleFactory } from "../../utils";
import { EndpointHandler } from './objectDownloadReqHandler';
import Router from 'koa-router';
const bodyParser = require('koa-bodyparser');

export const ostorageModule = createFacadeModuleFactory<OstorageConfig, OstorageModule>(namespace, (facade, config) => {
  const ostorage = {
    client: new OstorageSrvGrpcClient(config.config.client.address, {
      ...config.config.client,
      logger: facade.logger,
    })
  };

  facade.addApolloService({
    name: namespace,
    schema: FederatedOstorageSchema(config.config)
  });

  let idsClient: any;
  const router = new Router();

  router.use(bodyParser({ multipart: true }));
  router.get(/^\/storage\/([^/]+)\/(.+)/, async (ctx: any, next: any) => {

    const authToken = ctx.request.header['authorization'];
    let token;
    if (authToken && authToken.startsWith('Bearer ')) {
      token = authToken.split(' ')[1];
      console.log('idsClient ', idsClient, 'token ', token);
      const dbSubject = await idsClient.findByToken({ token });
      ctx.subject = { token, id: dbSubject?.payload?.id };
      ctx.subject = { token };
    }
    const bucket = ctx.params[0];
    const key = ctx.params[1];
    await EndpointHandler.handleGetFile(bucket, key, ctx, ostorage.client);
    return ctx.response;
  });

  facade.koa.use(router.routes());
  facade.koa.use(router.allowedMethods());

  facade.koa.use(async (ctx, next) => {
    ctx.ostorage = ostorage;
    await next();
  });

});
