/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { protoMetadata as protoMetadata3, Subject } from "./auth";
import { protoMetadata as protoMetadata7 } from "./contact_point";
import { Meta, protoMetadata as protoMetadata2 } from "./meta";
import { protoMetadata as protoMetadata5, Resolver } from "./options";
import { protoMetadata as protoMetadata8 } from "./organization";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata1, ReadRequest } from "./resource_base";
import { OperationStatus, protoMetadata as protoMetadata4, Status } from "./status";
import { protoMetadata as protoMetadata6 } from "./user";

export const protobufPackage = "io.restorecommerce.customer";

export interface CustomerList {
  items: Customer[];
  total_count?: number | undefined;
  subject?: Subject;
}

export interface CustomerListResponse {
  items: CustomerResponse[];
  total_count: number;
  operation_status?: OperationStatus;
}

export interface CustomerResponse {
  payload?: Customer;
  status?: Status;
}

export interface Customer {
  id?: string | undefined;
  meta?: Meta | undefined;
  private?: Private | undefined;
  commercial?: Commercial | undefined;
  public_sector?: PublicSector | undefined;
}

export interface Private {
  user_id?: string | undefined;
  contact_point_ids: string[];
}

export interface Commercial {
  organization_id?: string | undefined;
}

export interface PublicSector {
  organization_id?: string | undefined;
}

function createBaseCustomerList(): CustomerList {
  return { items: [], total_count: undefined, subject: undefined };
}

export const CustomerList = {
  encode(message: CustomerList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Customer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== undefined) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CustomerList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomerList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(Customer.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.total_count = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CustomerList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Customer.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: CustomerList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? Customer.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CustomerList>): CustomerList {
    return CustomerList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CustomerList>): CustomerList {
    const message = createBaseCustomerList();
    message.items = object.items?.map((e) => Customer.fromPartial(e)) || [];
    message.total_count = object.total_count ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseCustomerListResponse(): CustomerListResponse {
  return { items: [], total_count: 0, operation_status: undefined };
}

export const CustomerListResponse = {
  encode(message: CustomerListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      CustomerResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CustomerListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomerListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(CustomerResponse.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.total_count = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.operation_status = OperationStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CustomerListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => CustomerResponse.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: CustomerListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? CustomerResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CustomerListResponse>): CustomerListResponse {
    return CustomerListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CustomerListResponse>): CustomerListResponse {
    const message = createBaseCustomerListResponse();
    message.items = object.items?.map((e) => CustomerResponse.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
      : undefined;
    return message;
  },
};

function createBaseCustomerResponse(): CustomerResponse {
  return { payload: undefined, status: undefined };
}

export const CustomerResponse = {
  encode(message: CustomerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      Customer.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CustomerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = Customer.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.status = Status.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CustomerResponse {
    return {
      payload: isSet(object.payload) ? Customer.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: CustomerResponse): unknown {
    const obj: any = {};
    message.payload !== undefined && (obj.payload = message.payload ? Customer.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CustomerResponse>): CustomerResponse {
    return CustomerResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CustomerResponse>): CustomerResponse {
    const message = createBaseCustomerResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? Customer.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseCustomer(): Customer {
  return { id: undefined, meta: undefined, private: undefined, commercial: undefined, public_sector: undefined };
}

export const Customer = {
  encode(message: Customer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.private !== undefined) {
      Private.encode(message.private, writer.uint32(26).fork()).ldelim();
    }
    if (message.commercial !== undefined) {
      Commercial.encode(message.commercial, writer.uint32(34).fork()).ldelim();
    }
    if (message.public_sector !== undefined) {
      PublicSector.encode(message.public_sector, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Customer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.meta = Meta.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.private = Private.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.commercial = Commercial.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.public_sector = PublicSector.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Customer {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      private: isSet(object.private) ? Private.fromJSON(object.private) : undefined,
      commercial: isSet(object.commercial) ? Commercial.fromJSON(object.commercial) : undefined,
      public_sector: isSet(object.public_sector) ? PublicSector.fromJSON(object.public_sector) : undefined,
    };
  },

  toJSON(message: Customer): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.private !== undefined && (obj.private = message.private ? Private.toJSON(message.private) : undefined);
    message.commercial !== undefined &&
      (obj.commercial = message.commercial ? Commercial.toJSON(message.commercial) : undefined);
    message.public_sector !== undefined &&
      (obj.public_sector = message.public_sector ? PublicSector.toJSON(message.public_sector) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Customer>): Customer {
    return Customer.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Customer>): Customer {
    const message = createBaseCustomer();
    message.id = object.id ?? undefined;
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.private = (object.private !== undefined && object.private !== null)
      ? Private.fromPartial(object.private)
      : undefined;
    message.commercial = (object.commercial !== undefined && object.commercial !== null)
      ? Commercial.fromPartial(object.commercial)
      : undefined;
    message.public_sector = (object.public_sector !== undefined && object.public_sector !== null)
      ? PublicSector.fromPartial(object.public_sector)
      : undefined;
    return message;
  },
};

function createBasePrivate(): Private {
  return { user_id: undefined, contact_point_ids: [] };
}

export const Private = {
  encode(message: Private, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user_id !== undefined) {
      writer.uint32(10).string(message.user_id);
    }
    for (const v of message.contact_point_ids) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Private {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrivate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user_id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.contact_point_ids.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Private {
    return {
      user_id: isSet(object.user_id) ? String(object.user_id) : undefined,
      contact_point_ids: Array.isArray(object?.contact_point_ids)
        ? object.contact_point_ids.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: Private): unknown {
    const obj: any = {};
    message.user_id !== undefined && (obj.user_id = message.user_id);
    if (message.contact_point_ids) {
      obj.contact_point_ids = message.contact_point_ids.map((e) => e);
    } else {
      obj.contact_point_ids = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Private>): Private {
    return Private.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Private>): Private {
    const message = createBasePrivate();
    message.user_id = object.user_id ?? undefined;
    message.contact_point_ids = object.contact_point_ids?.map((e) => e) || [];
    return message;
  },
};

function createBaseCommercial(): Commercial {
  return { organization_id: undefined };
}

export const Commercial = {
  encode(message: Commercial, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.organization_id !== undefined) {
      writer.uint32(10).string(message.organization_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Commercial {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommercial();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.organization_id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Commercial {
    return { organization_id: isSet(object.organization_id) ? String(object.organization_id) : undefined };
  },

  toJSON(message: Commercial): unknown {
    const obj: any = {};
    message.organization_id !== undefined && (obj.organization_id = message.organization_id);
    return obj;
  },

  create(base?: DeepPartial<Commercial>): Commercial {
    return Commercial.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Commercial>): Commercial {
    const message = createBaseCommercial();
    message.organization_id = object.organization_id ?? undefined;
    return message;
  },
};

function createBasePublicSector(): PublicSector {
  return { organization_id: undefined };
}

export const PublicSector = {
  encode(message: PublicSector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.organization_id !== undefined) {
      writer.uint32(10).string(message.organization_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublicSector {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublicSector();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.organization_id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PublicSector {
    return { organization_id: isSet(object.organization_id) ? String(object.organization_id) : undefined };
  },

  toJSON(message: PublicSector): unknown {
    const obj: any = {};
    message.organization_id !== undefined && (obj.organization_id = message.organization_id);
    return obj;
  },

  create(base?: DeepPartial<PublicSector>): PublicSector {
    return PublicSector.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PublicSector>): PublicSector {
    const message = createBasePublicSector();
    message.organization_id = object.organization_id ?? undefined;
    return message;
  },
};

/** Microservice definition. */
export type CustomerServiceDefinition = typeof CustomerServiceDefinition;
export const CustomerServiceDefinition = {
  name: "CustomerService",
  fullName: "io.restorecommerce.customer.CustomerService",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: CustomerListResponse,
      responseStream: false,
      options: { _unknownFields: { 248008: [Buffer.from([1])] } },
    },
    create: {
      name: "Create",
      requestType: CustomerList,
      requestStream: false,
      responseType: CustomerListResponse,
      responseStream: false,
      options: {},
    },
    delete: {
      name: "Delete",
      requestType: DeleteRequest,
      requestStream: false,
      responseType: DeleteResponse,
      responseStream: false,
      options: {},
    },
    update: {
      name: "Update",
      requestType: CustomerList,
      requestStream: false,
      responseType: CustomerListResponse,
      responseStream: false,
      options: {},
    },
    upsert: {
      name: "Upsert",
      requestType: CustomerList,
      requestStream: false,
      responseType: CustomerListResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface CustomerServiceImplementation<CallContextExt = {}> {
  read(request: ReadRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CustomerListResponse>>;
  create(request: CustomerList, context: CallContext & CallContextExt): Promise<DeepPartial<CustomerListResponse>>;
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
  update(request: CustomerList, context: CallContext & CallContextExt): Promise<DeepPartial<CustomerListResponse>>;
  upsert(request: CustomerList, context: CallContext & CallContextExt): Promise<DeepPartial<CustomerListResponse>>;
}

export interface CustomerServiceClient<CallOptionsExt = {}> {
  read(request: DeepPartial<ReadRequest>, options?: CallOptions & CallOptionsExt): Promise<CustomerListResponse>;
  create(request: DeepPartial<CustomerList>, options?: CallOptions & CallOptionsExt): Promise<CustomerListResponse>;
  delete(request: DeepPartial<DeleteRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteResponse>;
  update(request: DeepPartial<CustomerList>, options?: CallOptions & CallOptionsExt): Promise<CustomerListResponse>;
  upsert(request: DeepPartial<CustomerList>, options?: CallOptions & CallOptionsExt): Promise<CustomerListResponse>;
}

type ProtoMetaMessageOptions = {
  options?: { [key: string]: any };
  fields?: { [key: string]: { [key: string]: any } };
  oneof?: { [key: string]: { [key: string]: any } };
  nested?: { [key: string]: ProtoMetaMessageOptions };
};

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto1;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
  options?: {
    options?: { [key: string]: any };
    services?: {
      [key: string]: { options?: { [key: string]: any }; methods?: { [key: string]: { [key: string]: any } } };
    };
    messages?: { [key: string]: ProtoMetaMessageOptions };
    enums?: { [key: string]: { options?: { [key: string]: any }; values?: { [key: string]: { [key: string]: any } } } };
  };
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto1.fromPartial({
    "name": "io/restorecommerce/customer.proto",
    "package": "io.restorecommerce.customer",
    "dependency": [
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/options.proto",
      "io/restorecommerce/user.proto",
      "io/restorecommerce/contact_point.proto",
      "io/restorecommerce/organization.proto",
    ],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "CustomerList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.customer.Customer",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "items",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "total_count",
        "number": 2,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "totalCount",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "subject",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.auth.Subject",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "subject",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_total_count", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "CustomerListResponse",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.customer.CustomerResponse",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "items",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "total_count",
        "number": 2,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "totalCount",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "operation_status",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.OperationStatus",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "operationStatus",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "CustomerResponse",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.customer.Customer",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "payload",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "status",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.Status",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "status",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "Customer",
      "field": [{
        "name": "id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "id",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "meta",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.meta.Meta",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "meta",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "private",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.customer.Private",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "private",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "commercial",
        "number": 4,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.customer.Commercial",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "commercial",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "public_sector",
        "number": 5,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.customer.PublicSector",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "publicSector",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "type", "options": undefined }, { "name": "_id", "options": undefined }, {
        "name": "_meta",
        "options": undefined,
      }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "Private",
      "field": [{
        "name": "user_id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "userId",
        "options": {
          "ctype": 0,
          "packed": false,
          "jstype": 0,
          "lazy": false,
          "deprecated": false,
          "weak": false,
          "uninterpretedOption": [],
        },
        "proto3Optional": true,
      }, {
        "name": "contact_point_ids",
        "number": 2,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "contactPointIds",
        "options": {
          "ctype": 0,
          "packed": false,
          "jstype": 0,
          "lazy": false,
          "deprecated": false,
          "weak": false,
          "uninterpretedOption": [],
        },
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_user_id", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "Commercial",
      "field": [{
        "name": "organization_id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "organizationId",
        "options": {
          "ctype": 0,
          "packed": false,
          "jstype": 0,
          "lazy": false,
          "deprecated": false,
          "weak": false,
          "uninterpretedOption": [],
        },
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_organization_id", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "PublicSector",
      "field": [{
        "name": "organization_id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "organizationId",
        "options": {
          "ctype": 0,
          "packed": false,
          "jstype": 0,
          "lazy": false,
          "deprecated": false,
          "weak": false,
          "uninterpretedOption": [],
        },
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_organization_id", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "enumType": [],
    "service": [{
      "name": "CustomerService",
      "method": [{
        "name": "Read",
        "inputType": ".io.restorecommerce.resourcebase.ReadRequest",
        "outputType": ".io.restorecommerce.customer.CustomerListResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Create",
        "inputType": ".io.restorecommerce.customer.CustomerList",
        "outputType": ".io.restorecommerce.customer.CustomerListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Delete",
        "inputType": ".io.restorecommerce.resourcebase.DeleteRequest",
        "outputType": ".io.restorecommerce.resourcebase.DeleteResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Update",
        "inputType": ".io.restorecommerce.customer.CustomerList",
        "outputType": ".io.restorecommerce.customer.CustomerListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Upsert",
        "inputType": ".io.restorecommerce.customer.CustomerList",
        "outputType": ".io.restorecommerce.customer.CustomerListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }],
      "options": undefined,
    }],
    "extension": [],
    "options": undefined,
    "sourceCodeInfo": {
      "location": [{
        "path": [3, 5],
        "span": [11, 0, 39],
        "leadingComments": " Used by resolvers\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0],
        "span": [18, 0, 26, 1],
        "leadingComments": "\nMicroservice definition.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.customer.CustomerList": CustomerList,
    ".io.restorecommerce.customer.CustomerListResponse": CustomerListResponse,
    ".io.restorecommerce.customer.CustomerResponse": CustomerResponse,
    ".io.restorecommerce.customer.Customer": Customer,
    ".io.restorecommerce.customer.Private": Private,
    ".io.restorecommerce.customer.Commercial": Commercial,
    ".io.restorecommerce.customer.PublicSector": PublicSector,
  },
  dependencies: [
    protoMetadata1,
    protoMetadata2,
    protoMetadata3,
    protoMetadata4,
    protoMetadata5,
    protoMetadata6,
    protoMetadata7,
    protoMetadata8,
  ],
  options: {
    messages: {
      "Private": {
        fields: {
          "user_id": {
            "resolver": Resolver.decode(
              Buffer.from("Ch0uaW8ucmVzdG9yZWNvbW1lcmNlLnVzZXIuVXNlchIIaWRlbnRpdHkaBHVzZXIiBFJlYWQqBHVzZXI=", "base64"),
            ),
          },
          "contact_point_ids": {
            "resolver": Resolver.decode(
              Buffer.from(
                "Ci4uaW8ucmVzdG9yZWNvbW1lcmNlLmNvbnRhY3RfcG9pbnQuQ29udGFjdFBvaW50EgttYXN0ZXJfZGF0YRoNY29udGFjdF9wb2ludCIEUmVhZCoNY29udGFjdFBvaW50cw==",
                "base64",
              ),
            ),
          },
        },
      },
      "Commercial": {
        fields: {
          "organization_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "Ci0uaW8ucmVzdG9yZWNvbW1lcmNlLm9yZ2FuaXphdGlvbi5Pcmdhbml6YXRpb24SC21hc3Rlcl9kYXRhGgxvcmdhbml6YXRpb24iBFJlYWQqDG9yZ2FuaXphdGlvbg==",
                "base64",
              ),
            ),
          },
        },
      },
      "PublicSector": {
        fields: {
          "organization_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "Ci0uaW8ucmVzdG9yZWNvbW1lcmNlLm9yZ2FuaXphdGlvbi5Pcmdhbml6YXRpb24SC21hc3Rlcl9kYXRhGgxvcmdhbml6YXRpb24iBFJlYWQqDG9yZ2FuaXphdGlvbg==",
                "base64",
              ),
            ),
          },
        },
      },
    },
    services: { "CustomerService": { options: undefined, methods: { "Read": { "is_query": true } } } },
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
