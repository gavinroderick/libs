import { RestoreCommerceGrpcClient } from "@restorecommerce/rc-grpc-clients";
import {
  protoMetadata,
  protobufPackage,
  Service
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/payment";
import { getGRPCService } from "../../../gql/protos";
import { GrpcClientConfig } from "@restorecommerce/grpc-client";
import { Logger } from "winston";

export class PaymentSrvGrpcClient extends RestoreCommerceGrpcClient {
  constructor(cfg: GrpcClientConfig, logger: Logger) {
    super(cfg, logger);
  }
  service = getGRPCService<Service>(this, protobufPackage, protoMetadata.fileDescriptor.service![0]);
}
