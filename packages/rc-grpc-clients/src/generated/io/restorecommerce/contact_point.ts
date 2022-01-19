/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  Subject,
  protoMetadata as protoMetadata3,
} from "../../io/restorecommerce/auth";
import {
  OperationStatus,
  Status,
  protoMetadata as protoMetadata4,
} from "../../io/restorecommerce/status";
import {
  Meta,
  protoMetadata as protoMetadata2,
} from "../../io/restorecommerce/meta";
import {
  protoMetadata as protoMetadata1,
  DeleteResponse,
  ReadRequest,
  DeleteRequest,
} from "../../io/restorecommerce/resource_base";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.contact_point";

export interface Deleted {
  id: string;
}

export interface ContactPointList {
  items: ContactPoint[];
  total_count: number;
  subject?: Subject;
}

export interface ContactPointListResponse {
  items: ContactPointResponse[];
  total_count: number;
  operation_status?: OperationStatus;
}

export interface ContactPointResponse {
  payload?: ContactPoint;
  status?: Status;
}

export interface ContactPoint {
  id: string;
  meta?: Meta;
  physical_address_id: string;
  website: string;
  email: string;
  contact_point_type_id: string;
  telephone: string;
  timezone_id: string;
  locale_id: string;
}

const baseDeleted: object = { id: "" };

export const Deleted = {
  encode(message: Deleted, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Deleted {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseDeleted) as Deleted;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Deleted {
    const message = globalThis.Object.create(baseDeleted) as Deleted;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<Deleted>): Deleted {
    const message = { ...baseDeleted } as Deleted;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: Deleted): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
};

const baseContactPointList: object = { total_count: 0 };

export const ContactPointList = {
  encode(message: ContactPointList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      ContactPoint.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ContactPointList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseContactPointList
    ) as ContactPointList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(ContactPoint.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total_count = reader.uint32();
          break;
        case 3:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContactPointList {
    const message = globalThis.Object.create(
      baseContactPointList
    ) as ContactPointList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(ContactPoint.fromJSON(e));
      }
    }
    if (object.total_count !== undefined && object.total_count !== null) {
      message.total_count = Number(object.total_count);
    } else {
      message.total_count = 0;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<ContactPointList>): ContactPointList {
    const message = { ...baseContactPointList } as ContactPointList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(ContactPoint.fromPartial(e));
      }
    }
    if (object.total_count !== undefined && object.total_count !== null) {
      message.total_count = object.total_count;
    } else {
      message.total_count = 0;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  toJSON(message: ContactPointList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ContactPoint.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.total_count !== undefined &&
      (obj.total_count = message.total_count);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseContactPointListResponse: object = { total_count: 0 };

export const ContactPointListResponse = {
  encode(
    message: ContactPointListResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.items) {
      ContactPointResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(
        message.operation_status,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ContactPointListResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseContactPointListResponse
    ) as ContactPointListResponse;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            ContactPointResponse.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.total_count = reader.uint32();
          break;
        case 3:
          message.operation_status = OperationStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContactPointListResponse {
    const message = globalThis.Object.create(
      baseContactPointListResponse
    ) as ContactPointListResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(ContactPointResponse.fromJSON(e));
      }
    }
    if (object.total_count !== undefined && object.total_count !== null) {
      message.total_count = Number(object.total_count);
    } else {
      message.total_count = 0;
    }
    if (
      object.operation_status !== undefined &&
      object.operation_status !== null
    ) {
      message.operation_status = OperationStatus.fromJSON(
        object.operation_status
      );
    } else {
      message.operation_status = undefined;
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<ContactPointListResponse>
  ): ContactPointListResponse {
    const message = {
      ...baseContactPointListResponse,
    } as ContactPointListResponse;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(ContactPointResponse.fromPartial(e));
      }
    }
    if (object.total_count !== undefined && object.total_count !== null) {
      message.total_count = object.total_count;
    } else {
      message.total_count = 0;
    }
    if (
      object.operation_status !== undefined &&
      object.operation_status !== null
    ) {
      message.operation_status = OperationStatus.fromPartial(
        object.operation_status
      );
    } else {
      message.operation_status = undefined;
    }
    return message;
  },

  toJSON(message: ContactPointListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ContactPointResponse.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.total_count !== undefined &&
      (obj.total_count = message.total_count);
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status
        ? OperationStatus.toJSON(message.operation_status)
        : undefined);
    return obj;
  },
};

const baseContactPointResponse: object = {};

export const ContactPointResponse = {
  encode(
    message: ContactPointResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.payload !== undefined) {
      ContactPoint.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ContactPointResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseContactPointResponse
    ) as ContactPointResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = ContactPoint.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContactPointResponse {
    const message = globalThis.Object.create(
      baseContactPointResponse
    ) as ContactPointResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = ContactPoint.fromJSON(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromJSON(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<ContactPointResponse>): ContactPointResponse {
    const message = { ...baseContactPointResponse } as ContactPointResponse;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = ContactPoint.fromPartial(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromPartial(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  toJSON(message: ContactPointResponse): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? ContactPoint.toJSON(message.payload)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },
};

const baseContactPoint: object = {
  id: "",
  physical_address_id: "",
  website: "",
  email: "",
  contact_point_type_id: "",
  telephone: "",
  timezone_id: "",
  locale_id: "",
};

export const ContactPoint = {
  encode(message: ContactPoint, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.physical_address_id !== "") {
      writer.uint32(26).string(message.physical_address_id);
    }
    if (message.website !== "") {
      writer.uint32(34).string(message.website);
    }
    if (message.email !== "") {
      writer.uint32(42).string(message.email);
    }
    if (message.contact_point_type_id !== "") {
      writer.uint32(50).string(message.contact_point_type_id);
    }
    if (message.telephone !== "") {
      writer.uint32(66).string(message.telephone);
    }
    if (message.timezone_id !== "") {
      writer.uint32(74).string(message.timezone_id);
    }
    if (message.locale_id !== "") {
      writer.uint32(82).string(message.locale_id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ContactPoint {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseContactPoint) as ContactPoint;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.meta = Meta.decode(reader, reader.uint32());
          break;
        case 3:
          message.physical_address_id = reader.string();
          break;
        case 4:
          message.website = reader.string();
          break;
        case 5:
          message.email = reader.string();
          break;
        case 6:
          message.contact_point_type_id = reader.string();
          break;
        case 8:
          message.telephone = reader.string();
          break;
        case 9:
          message.timezone_id = reader.string();
          break;
        case 10:
          message.locale_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContactPoint {
    const message = globalThis.Object.create(baseContactPoint) as ContactPoint;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromJSON(object.meta);
    } else {
      message.meta = undefined;
    }
    if (
      object.physical_address_id !== undefined &&
      object.physical_address_id !== null
    ) {
      message.physical_address_id = String(object.physical_address_id);
    } else {
      message.physical_address_id = "";
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = String(object.website);
    } else {
      message.website = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = String(object.email);
    } else {
      message.email = "";
    }
    if (
      object.contact_point_type_id !== undefined &&
      object.contact_point_type_id !== null
    ) {
      message.contact_point_type_id = String(object.contact_point_type_id);
    } else {
      message.contact_point_type_id = "";
    }
    if (object.telephone !== undefined && object.telephone !== null) {
      message.telephone = String(object.telephone);
    } else {
      message.telephone = "";
    }
    if (object.timezone_id !== undefined && object.timezone_id !== null) {
      message.timezone_id = String(object.timezone_id);
    } else {
      message.timezone_id = "";
    }
    if (object.locale_id !== undefined && object.locale_id !== null) {
      message.locale_id = String(object.locale_id);
    } else {
      message.locale_id = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<ContactPoint>): ContactPoint {
    const message = { ...baseContactPoint } as ContactPoint;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromPartial(object.meta);
    } else {
      message.meta = undefined;
    }
    if (
      object.physical_address_id !== undefined &&
      object.physical_address_id !== null
    ) {
      message.physical_address_id = object.physical_address_id;
    } else {
      message.physical_address_id = "";
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = object.website;
    } else {
      message.website = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    if (
      object.contact_point_type_id !== undefined &&
      object.contact_point_type_id !== null
    ) {
      message.contact_point_type_id = object.contact_point_type_id;
    } else {
      message.contact_point_type_id = "";
    }
    if (object.telephone !== undefined && object.telephone !== null) {
      message.telephone = object.telephone;
    } else {
      message.telephone = "";
    }
    if (object.timezone_id !== undefined && object.timezone_id !== null) {
      message.timezone_id = object.timezone_id;
    } else {
      message.timezone_id = "";
    }
    if (object.locale_id !== undefined && object.locale_id !== null) {
      message.locale_id = object.locale_id;
    } else {
      message.locale_id = "";
    }
    return message;
  },

  toJSON(message: ContactPoint): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.physical_address_id !== undefined &&
      (obj.physical_address_id = message.physical_address_id);
    message.website !== undefined && (obj.website = message.website);
    message.email !== undefined && (obj.email = message.email);
    message.contact_point_type_id !== undefined &&
      (obj.contact_point_type_id = message.contact_point_type_id);
    message.telephone !== undefined && (obj.telephone = message.telephone);
    message.timezone_id !== undefined &&
      (obj.timezone_id = message.timezone_id);
    message.locale_id !== undefined && (obj.locale_id = message.locale_id);
    return obj;
  },
};

export interface Service {
  Read(request: ReadRequest): Promise<ContactPointListResponse>;
  Create(request: ContactPointList): Promise<ContactPointListResponse>;
  Delete(request: DeleteRequest): Promise<DeleteResponse>;
  Update(request: ContactPointList): Promise<ContactPointListResponse>;
  Upsert(request: ContactPointList): Promise<ContactPointListResponse>;
}

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto.fromPartial({
    dependency: [
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        field: [{ name: "id", number: 1, label: 1, type: 9, jsonName: "id" }],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Deleted",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.contact_point.ContactPoint",
            jsonName: "items",
          },
          {
            name: "total_count",
            number: 2,
            label: 1,
            type: 13,
            jsonName: "totalCount",
          },
          {
            name: "subject",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ContactPointList",
      },
      {
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.contact_point.ContactPointResponse",
            jsonName: "items",
          },
          {
            name: "total_count",
            number: 2,
            label: 1,
            type: 13,
            jsonName: "totalCount",
          },
          {
            name: "operation_status",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.OperationStatus",
            jsonName: "operationStatus",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ContactPointListResponse",
      },
      {
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.contact_point.ContactPoint",
            jsonName: "payload",
          },
          {
            name: "status",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.Status",
            jsonName: "status",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ContactPointResponse",
      },
      {
        field: [
          { name: "id", number: 1, label: 1, type: 9, jsonName: "id" },
          {
            name: "meta",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.meta.Meta",
            jsonName: "meta",
          },
          {
            name: "physical_address_id",
            number: 3,
            label: 1,
            type: 9,
            jsonName: "physicalAddressId",
          },
          {
            name: "website",
            number: 4,
            label: 1,
            type: 9,
            jsonName: "website",
          },
          { name: "email", number: 5, label: 1, type: 9, jsonName: "email" },
          {
            name: "contact_point_type_id",
            number: 6,
            label: 1,
            type: 9,
            jsonName: "contactPointTypeId",
          },
          {
            name: "telephone",
            number: 8,
            label: 1,
            type: 9,
            jsonName: "telephone",
          },
          {
            name: "timezone_id",
            number: 9,
            label: 1,
            type: 9,
            jsonName: "timezoneId",
          },
          {
            name: "locale_id",
            number: 10,
            label: 1,
            type: 9,
            jsonName: "localeId",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "ContactPoint",
      },
    ],
    enumType: [],
    service: [
      {
        method: [
          {
            name: "Read",
            inputType: ".io.restorecommerce.resourcebase.ReadRequest",
            outputType:
              ".io.restorecommerce.contact_point.ContactPointListResponse",
          },
          {
            name: "Create",
            inputType: ".io.restorecommerce.contact_point.ContactPointList",
            outputType:
              ".io.restorecommerce.contact_point.ContactPointListResponse",
          },
          {
            name: "Delete",
            inputType: ".io.restorecommerce.resourcebase.DeleteRequest",
            outputType: ".io.restorecommerce.resourcebase.DeleteResponse",
          },
          {
            name: "Update",
            inputType: ".io.restorecommerce.contact_point.ContactPointList",
            outputType:
              ".io.restorecommerce.contact_point.ContactPointListResponse",
          },
          {
            name: "Upsert",
            inputType: ".io.restorecommerce.contact_point.ContactPointList",
            outputType:
              ".io.restorecommerce.contact_point.ContactPointListResponse",
          },
        ],
        name: "Service",
      },
    ],
    extension: [],
    name: "io/restorecommerce/contact_point.proto",
    package: "io.restorecommerce.contact_point",
    sourceCodeInfo: { location: [] },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.contact_point.Deleted": Deleted,
    ".io.restorecommerce.contact_point.ContactPointList": ContactPointList,
    ".io.restorecommerce.contact_point.ContactPointListResponse": ContactPointListResponse,
    ".io.restorecommerce.contact_point.ContactPointResponse": ContactPointResponse,
    ".io.restorecommerce.contact_point.ContactPoint": ContactPoint,
  },
  dependencies: [
    protoMetadata1,
    protoMetadata2,
    protoMetadata3,
    protoMetadata4,
  ],
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
