/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { Any, protoMetadata as protoMetadata2 } from "../../google/protobuf/any";
import { protoMetadata as protoMetadata7 } from "./address";
import { protoMetadata as protoMetadata4, Subject } from "./auth";
import { protoMetadata as protoMetadata8 } from "./contact_point";
import { Meta, protoMetadata as protoMetadata3 } from "./meta";
import { protoMetadata as protoMetadata6, Resolver } from "./options";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata1, ReadRequest } from "./resource_base";
import { OperationStatus, protoMetadata as protoMetadata5, Status } from "./status";

export const protobufPackage = "io.restorecommerce.organization";

export interface Deleted {
  id: string;
}

export interface DeleteOrgData {
  orgIds: string[];
  userIds: string[];
  subject?: Subject;
}

export interface OrganizationList {
  items: Organization[];
  totalCount?: number | undefined;
  subject?: Subject;
}

export interface OrganizationListResponse {
  items: OrganizationResponse[];
  totalCount: number;
  operationStatus?: OperationStatus;
}

export interface OrganizationResponse {
  payload?: Organization;
  status?: Status;
}

export interface Organization {
  /** / Organization ID, unique, key */
  id?: string | undefined;
  meta?:
    | Meta
    | undefined;
  /** Hierarchically superior organization; may be null */
  parentId?:
    | string
    | undefined;
  /** list of possible legal addresses of different types */
  contactPointIds: string[];
  website?: string | undefined;
  email?:
    | string
    | undefined;
  /** base64; arangoDB does not support blob storage */
  logo?: string | undefined;
  vatId?: string | undefined;
  isicV4?: string | undefined;
  registration?: string | undefined;
  registrationCourt?: string | undefined;
  name?: string | undefined;
  paymentMethodIds: string[];
  /** / additional data */
  data?: Any | undefined;
}

function createBaseDeleted(): Deleted {
  return { id: "" };
}

export const Deleted = {
  encode(message: Deleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Deleted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Deleted {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: Deleted): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<Deleted>): Deleted {
    return Deleted.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Deleted>): Deleted {
    const message = createBaseDeleted();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDeleteOrgData(): DeleteOrgData {
  return { orgIds: [], userIds: [], subject: undefined };
}

export const DeleteOrgData = {
  encode(message: DeleteOrgData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orgIds) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.userIds) {
      writer.uint32(18).string(v!);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOrgData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteOrgData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orgIds.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userIds.push(reader.string());
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

  fromJSON(object: any): DeleteOrgData {
    return {
      orgIds: Array.isArray(object?.orgIds) ? object.orgIds.map((e: any) => String(e)) : [],
      userIds: Array.isArray(object?.userIds) ? object.userIds.map((e: any) => String(e)) : [],
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: DeleteOrgData): unknown {
    const obj: any = {};
    if (message.orgIds) {
      obj.orgIds = message.orgIds.map((e) => e);
    } else {
      obj.orgIds = [];
    }
    if (message.userIds) {
      obj.userIds = message.userIds.map((e) => e);
    } else {
      obj.userIds = [];
    }
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<DeleteOrgData>): DeleteOrgData {
    return DeleteOrgData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DeleteOrgData>): DeleteOrgData {
    const message = createBaseDeleteOrgData();
    message.orgIds = object.orgIds?.map((e) => e) || [];
    message.userIds = object.userIds?.map((e) => e) || [];
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseOrganizationList(): OrganizationList {
  return { items: [], totalCount: undefined, subject: undefined };
}

export const OrganizationList = {
  encode(message: OrganizationList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Organization.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== undefined) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrganizationList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrganizationList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(Organization.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.totalCount = reader.uint32();
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

  fromJSON(object: any): OrganizationList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Organization.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: OrganizationList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? Organization.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<OrganizationList>): OrganizationList {
    return OrganizationList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<OrganizationList>): OrganizationList {
    const message = createBaseOrganizationList();
    message.items = object.items?.map((e) => Organization.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseOrganizationListResponse(): OrganizationListResponse {
  return { items: [], totalCount: 0, operationStatus: undefined };
}

export const OrganizationListResponse = {
  encode(message: OrganizationListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      OrganizationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(message.operationStatus, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrganizationListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrganizationListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(OrganizationResponse.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.totalCount = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.operationStatus = OperationStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OrganizationListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => OrganizationResponse.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      operationStatus: isSet(object.operationStatus) ? OperationStatus.fromJSON(object.operationStatus) : undefined,
    };
  },

  toJSON(message: OrganizationListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? OrganizationResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus ? OperationStatus.toJSON(message.operationStatus) : undefined);
    return obj;
  },

  create(base?: DeepPartial<OrganizationListResponse>): OrganizationListResponse {
    return OrganizationListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<OrganizationListResponse>): OrganizationListResponse {
    const message = createBaseOrganizationListResponse();
    message.items = object.items?.map((e) => OrganizationResponse.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.operationStatus = (object.operationStatus !== undefined && object.operationStatus !== null)
      ? OperationStatus.fromPartial(object.operationStatus)
      : undefined;
    return message;
  },
};

function createBaseOrganizationResponse(): OrganizationResponse {
  return { payload: undefined, status: undefined };
}

export const OrganizationResponse = {
  encode(message: OrganizationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      Organization.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrganizationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrganizationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = Organization.decode(reader, reader.uint32());
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

  fromJSON(object: any): OrganizationResponse {
    return {
      payload: isSet(object.payload) ? Organization.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: OrganizationResponse): unknown {
    const obj: any = {};
    message.payload !== undefined && (obj.payload = message.payload ? Organization.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<OrganizationResponse>): OrganizationResponse {
    return OrganizationResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<OrganizationResponse>): OrganizationResponse {
    const message = createBaseOrganizationResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? Organization.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseOrganization(): Organization {
  return {
    id: undefined,
    meta: undefined,
    parentId: undefined,
    contactPointIds: [],
    website: undefined,
    email: undefined,
    logo: undefined,
    vatId: undefined,
    isicV4: undefined,
    registration: undefined,
    registrationCourt: undefined,
    name: undefined,
    paymentMethodIds: [],
    data: undefined,
  };
}

export const Organization = {
  encode(message: Organization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.parentId !== undefined) {
      writer.uint32(26).string(message.parentId);
    }
    for (const v of message.contactPointIds) {
      writer.uint32(34).string(v!);
    }
    if (message.website !== undefined) {
      writer.uint32(42).string(message.website);
    }
    if (message.email !== undefined) {
      writer.uint32(50).string(message.email);
    }
    if (message.logo !== undefined) {
      writer.uint32(58).string(message.logo);
    }
    if (message.vatId !== undefined) {
      writer.uint32(66).string(message.vatId);
    }
    if (message.isicV4 !== undefined) {
      writer.uint32(74).string(message.isicV4);
    }
    if (message.registration !== undefined) {
      writer.uint32(82).string(message.registration);
    }
    if (message.registrationCourt !== undefined) {
      writer.uint32(90).string(message.registrationCourt);
    }
    if (message.name !== undefined) {
      writer.uint32(98).string(message.name);
    }
    for (const v of message.paymentMethodIds) {
      writer.uint32(106).string(v!);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Organization {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrganization();
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

          message.parentId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.contactPointIds.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.website = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.email = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.logo = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.vatId = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.isicV4 = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.registration = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.registrationCourt = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.name = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.paymentMethodIds.push(reader.string());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.data = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Organization {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      contactPointIds: Array.isArray(object?.contactPointIds) ? object.contactPointIds.map((e: any) => String(e)) : [],
      website: isSet(object.website) ? String(object.website) : undefined,
      email: isSet(object.email) ? String(object.email) : undefined,
      logo: isSet(object.logo) ? String(object.logo) : undefined,
      vatId: isSet(object.vatId) ? String(object.vatId) : undefined,
      isicV4: isSet(object.isicV4) ? String(object.isicV4) : undefined,
      registration: isSet(object.registration) ? String(object.registration) : undefined,
      registrationCourt: isSet(object.registrationCourt) ? String(object.registrationCourt) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      paymentMethodIds: Array.isArray(object?.paymentMethodIds)
        ? object.paymentMethodIds.map((e: any) => String(e))
        : [],
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: Organization): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    if (message.contactPointIds) {
      obj.contactPointIds = message.contactPointIds.map((e) => e);
    } else {
      obj.contactPointIds = [];
    }
    message.website !== undefined && (obj.website = message.website);
    message.email !== undefined && (obj.email = message.email);
    message.logo !== undefined && (obj.logo = message.logo);
    message.vatId !== undefined && (obj.vatId = message.vatId);
    message.isicV4 !== undefined && (obj.isicV4 = message.isicV4);
    message.registration !== undefined && (obj.registration = message.registration);
    message.registrationCourt !== undefined && (obj.registrationCourt = message.registrationCourt);
    message.name !== undefined && (obj.name = message.name);
    if (message.paymentMethodIds) {
      obj.paymentMethodIds = message.paymentMethodIds.map((e) => e);
    } else {
      obj.paymentMethodIds = [];
    }
    message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Organization>): Organization {
    return Organization.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Organization>): Organization {
    const message = createBaseOrganization();
    message.id = object.id ?? undefined;
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.parentId = object.parentId ?? undefined;
    message.contactPointIds = object.contactPointIds?.map((e) => e) || [];
    message.website = object.website ?? undefined;
    message.email = object.email ?? undefined;
    message.logo = object.logo ?? undefined;
    message.vatId = object.vatId ?? undefined;
    message.isicV4 = object.isicV4 ?? undefined;
    message.registration = object.registration ?? undefined;
    message.registrationCourt = object.registrationCourt ?? undefined;
    message.name = object.name ?? undefined;
    message.paymentMethodIds = object.paymentMethodIds?.map((e) => e) || [];
    message.data = (object.data !== undefined && object.data !== null) ? Any.fromPartial(object.data) : undefined;
    return message;
  },
};

export type OrganizationServiceDefinition = typeof OrganizationServiceDefinition;
export const OrganizationServiceDefinition = {
  name: "OrganizationService",
  fullName: "io.restorecommerce.organization.OrganizationService",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: OrganizationListResponse,
      responseStream: false,
      options: { _unknownFields: { 248008: [Buffer.from([1])] } },
    },
    create: {
      name: "Create",
      requestType: OrganizationList,
      requestStream: false,
      responseType: OrganizationListResponse,
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
      requestType: OrganizationList,
      requestStream: false,
      responseType: OrganizationListResponse,
      responseStream: false,
      options: {},
    },
    upsert: {
      name: "Upsert",
      requestType: OrganizationList,
      requestStream: false,
      responseType: OrganizationListResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface OrganizationServiceImplementation<CallContextExt = {}> {
  read(request: ReadRequest, context: CallContext & CallContextExt): Promise<DeepPartial<OrganizationListResponse>>;
  create(
    request: OrganizationList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<OrganizationListResponse>>;
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
  update(
    request: OrganizationList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<OrganizationListResponse>>;
  upsert(
    request: OrganizationList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<OrganizationListResponse>>;
}

export interface OrganizationServiceClient<CallOptionsExt = {}> {
  read(request: DeepPartial<ReadRequest>, options?: CallOptions & CallOptionsExt): Promise<OrganizationListResponse>;
  create(
    request: DeepPartial<OrganizationList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<OrganizationListResponse>;
  delete(request: DeepPartial<DeleteRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteResponse>;
  update(
    request: DeepPartial<OrganizationList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<OrganizationListResponse>;
  upsert(
    request: DeepPartial<OrganizationList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<OrganizationListResponse>;
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
    "name": "io/restorecommerce/organization.proto",
    "package": "io.restorecommerce.organization",
    "dependency": [
      "io/restorecommerce/resource_base.proto",
      "google/protobuf/any.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/options.proto",
      "io/restorecommerce/address.proto",
      "io/restorecommerce/contact_point.proto",
    ],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "Deleted",
      "field": [{
        "name": "id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "id",
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
      "name": "DeleteOrgData",
      "field": [{
        "name": "org_ids",
        "number": 1,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "orgIds",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "user_ids",
        "number": 2,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "userIds",
        "options": undefined,
        "proto3Optional": false,
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
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "OrganizationList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.organization.Organization",
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
      "name": "OrganizationListResponse",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.organization.OrganizationResponse",
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
      "name": "OrganizationResponse",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.organization.Organization",
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
      "name": "Organization",
      "field": [{
        "name": "id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
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
        "oneofIndex": 1,
        "jsonName": "meta",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "parent_id",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "parentId",
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
        "number": 4,
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
      }, {
        "name": "website",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "website",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "email",
        "number": 6,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "email",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "logo",
        "number": 7,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
        "jsonName": "logo",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "vat_id",
        "number": 8,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 6,
        "jsonName": "vatId",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "isic_v4",
        "number": 9,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 7,
        "jsonName": "isicV4",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "registration",
        "number": 10,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 8,
        "jsonName": "registration",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "registration_court",
        "number": 11,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 9,
        "jsonName": "registrationCourt",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "name",
        "number": 12,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 10,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "payment_method_ids",
        "number": 13,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "paymentMethodIds",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "data",
        "number": 14,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Any",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 11,
        "jsonName": "data",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_id", "options": undefined },
        { "name": "_meta", "options": undefined },
        { "name": "_parent_id", "options": undefined },
        { "name": "_website", "options": undefined },
        { "name": "_email", "options": undefined },
        { "name": "_logo", "options": undefined },
        { "name": "_vat_id", "options": undefined },
        { "name": "_isic_v4", "options": undefined },
        { "name": "_registration", "options": undefined },
        { "name": "_registration_court", "options": undefined },
        { "name": "_name", "options": undefined },
        { "name": "_data", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "enumType": [],
    "service": [{
      "name": "OrganizationService",
      "method": [{
        "name": "Read",
        "inputType": ".io.restorecommerce.resourcebase.ReadRequest",
        "outputType": ".io.restorecommerce.organization.OrganizationListResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Create",
        "inputType": ".io.restorecommerce.organization.OrganizationList",
        "outputType": ".io.restorecommerce.organization.OrganizationListResponse",
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
        "inputType": ".io.restorecommerce.organization.OrganizationList",
        "outputType": ".io.restorecommerce.organization.OrganizationListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Upsert",
        "inputType": ".io.restorecommerce.organization.OrganizationList",
        "outputType": ".io.restorecommerce.organization.OrganizationListResponse",
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
        "path": [3, 6],
        "span": [12, 0, 42],
        "leadingComments": " Used by resolvers\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 5, 2, 0],
        "span": [53, 2, 25],
        "leadingComments": "",
        "trailingComments": "/ Organization ID, unique, key\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 5, 2, 2],
        "span": [55, 2, 63, 4],
        "leadingComments": "",
        "trailingComments": "  Hierarchically superior organization; may be null\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 5, 2, 3],
        "span": [64, 2, 72, 4],
        "leadingComments": "",
        "trailingComments": " list of possible legal addresses of different types\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 5, 2, 6],
        "span": [75, 2, 27],
        "leadingComments": "",
        "trailingComments": " base64; arangoDB does not support blob storage\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 5, 2, 13],
        "span": [82, 2, 41],
        "leadingComments": "",
        "trailingComments": "/ additional data\n",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.organization.Deleted": Deleted,
    ".io.restorecommerce.organization.DeleteOrgData": DeleteOrgData,
    ".io.restorecommerce.organization.OrganizationList": OrganizationList,
    ".io.restorecommerce.organization.OrganizationListResponse": OrganizationListResponse,
    ".io.restorecommerce.organization.OrganizationResponse": OrganizationResponse,
    ".io.restorecommerce.organization.Organization": Organization,
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
      "Organization": {
        fields: {
          "parent_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "Ci0uaW8ucmVzdG9yZWNvbW1lcmNlLm9yZ2FuaXphdGlvbi5Pcmdhbml6YXRpb24SC21hc3Rlcl9kYXRhGgxvcmdhbml6YXRpb24iBFJlYWQqBnBhcmVudA==",
                "base64",
              ),
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
    },
    services: { "OrganizationService": { options: undefined, methods: { "Read": { "is_query": true } } } },
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
