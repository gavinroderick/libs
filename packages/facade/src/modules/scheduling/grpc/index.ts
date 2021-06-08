import { RestoreCommerceGrpcClient } from "@restorecommerce/rc-grpc-clients";
import {
  protoMetadata,
  protobufPackage,
  Service
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/job";
import { getGRPCService } from "../../../gql/protos";
import { GrpcClientConfig } from "@restorecommerce/grpc-client";
import { Logger } from "winston";

export class SchedulingSrvGrpcClient extends RestoreCommerceGrpcClient {
  constructor(cfg: GrpcClientConfig, logger: Logger) {
    super(cfg, logger);
  }
  job = getGRPCService<Service>(this, protobufPackage, protoMetadata.fileDescriptor.service![0]);
}
