import { FederatedOstorageSchema } from './gql/federation';
import { namespace, OstorageConfig, OstorageModule } from "./interfaces";
import { OstorageSrvGrpcClient } from "./grpc";
import { createFacadeModuleFactory } from "../../utils";
import { ObjectDownloadReqHandler } from './objectDownloadReqHandler';

export const ostorageModule = createFacadeModuleFactory<OstorageConfig, OstorageModule>(namespace, (facade, config) => {
  const ostorage = {
    client: new OstorageSrvGrpcClient(config.config.client.address, {
      ...config.config.client,
      logger: facade.logger,
    })
  };

  new ObjectDownloadReqHandler(facade.logger, config);

  facade.addApolloService({
    name: namespace,
    schema: FederatedOstorageSchema(config.config)
  });

  facade.koa.use(async (ctx, next) => {
    ctx.ostorage = ostorage;
    await next();
  });

});
