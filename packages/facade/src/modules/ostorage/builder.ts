import { OstorageSrvGrpcClient } from "./grpc";
import { createServiceConfig } from '@restorecommerce/service-config';

const cfg = createServiceConfig(process.cwd());

interface Microservices {
  conf: any;
  logger: any;
  microservice: {
    service: { [key: string]: any };
    mapClients: Map<string, string>;
  };
}

/**
 * Used to help 'build' part of the facade structure
 */
export class Builder {
  resourcesConfig: any;

  constructor() { }
  async setupServices(resourcesConfig: Microservices): Promise<any> {
    this.resourcesConfig = resourcesConfig;
    this.resourcesConfig.microservice = {
      service: {},
      mapClients: new Map<String, String>()
    };

    const clientConfig = cfg.get('client');
    for (let resource of Object.keys(clientConfig)) {
      const grpcConfig = clientConfig[resource];
      const packageName = grpcConfig.proto.services[resource].packageName;
      const serviceName = grpcConfig.proto.services[resource].serviceName;
      const fullServiceName = `${packageName}.${serviceName}`;
      try {
        const client = new OstorageSrvGrpcClient(grpcConfig, this.resourcesConfig.logger);
        this.resourcesConfig.microservice.service[fullServiceName] = client[resource];
        this.resourcesConfig.microservice.mapClients.set(resource, fullServiceName);
        this.resourcesConfig.logger.verbose('connected to microservice: ' + fullServiceName);
      } catch (err) {
        this.resourcesConfig.logger.error('microservice connecting to service',
          fullServiceName, err);
      }
    }
  }

  getMicroservices(): Microservices {
    return this.resourcesConfig;
  }

}

export const builder = new Builder();
