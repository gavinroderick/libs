/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { protoMetadata as protoMetadata4, Subject } from "./auth";
import { Meta, protoMetadata as protoMetadata3 } from "./meta";
import { protoMetadata as protoMetadata6 } from "./options";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata2, ReadRequest } from "./resource_base";
import { OperationStatus, protoMetadata as protoMetadata5, Status as Status1 } from "./status";

export const protobufPackage = "io.restorecommerce.code";

export enum Status {
  ADDED = "ADDED",
  CHANGED_NAME = "CHANGED_NAME",
  CHANGED_CHARACTERISTIC = "CHANGED_CHARACTERISTIC",
  DEPRECATED = "DEPRECATED",
  MARKED_AS_DELETED = "MARKED_AS_DELETED",
  REINSTATED = "REINSTATED",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function statusFromJSON(object: any): Status {
  switch (object) {
    case 0:
    case "ADDED":
      return Status.ADDED;
    case 1:
    case "CHANGED_NAME":
      return Status.CHANGED_NAME;
    case 2:
    case "CHANGED_CHARACTERISTIC":
      return Status.CHANGED_CHARACTERISTIC;
    case 3:
    case "DEPRECATED":
      return Status.DEPRECATED;
    case 4:
    case "MARKED_AS_DELETED":
      return Status.MARKED_AS_DELETED;
    case 5:
    case "REINSTATED":
      return Status.REINSTATED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Status.UNRECOGNIZED;
  }
}

export function statusToJSON(object: Status): string {
  switch (object) {
    case Status.ADDED:
      return "ADDED";
    case Status.CHANGED_NAME:
      return "CHANGED_NAME";
    case Status.CHANGED_CHARACTERISTIC:
      return "CHANGED_CHARACTERISTIC";
    case Status.DEPRECATED:
      return "DEPRECATED";
    case Status.MARKED_AS_DELETED:
      return "MARKED_AS_DELETED";
    case Status.REINSTATED:
      return "REINSTATED";
    case Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function statusToNumber(object: Status): number {
  switch (object) {
    case Status.ADDED:
      return 0;
    case Status.CHANGED_NAME:
      return 1;
    case Status.CHANGED_CHARACTERISTIC:
      return 2;
    case Status.DEPRECATED:
      return 3;
    case Status.MARKED_AS_DELETED:
      return 4;
    case Status.REINSTATED:
      return 5;
    case Status.UNRECOGNIZED:
    default:
      return -1;
  }
}

export enum Sector {
  UNKNOWN = "UNKNOWN",
  ACOUSTICS = "ACOUSTICS",
  ATOMIC_AND_NUCLEAR_PHYSICS = "ATOMIC_AND_NUCLEAR_PHYSICS",
  CHARACTERISTIC_NUMBERS = "CHARACTERISTIC_NUMBERS",
  ELECTRICITY_AND_MAGNETISM = "ELECTRICITY_AND_MAGNETISM",
  HEAT = "HEAT",
  LIGHT_AND_RELATED_ELECTROMAGNETIC_RADIATIONS = "LIGHT_AND_RELATED_ELECTROMAGNETIC_RADIATIONS",
  MECHANICS = "MECHANICS",
  MISCELLANEOUS = "MISCELLANEOUS",
  NUCLEAR_REACTIONS_AND_IONIZING_RADIATIONS = "NUCLEAR_REACTIONS_AND_IONIZING_RADIATIONS",
  PERIODIC_AND_RELATED_PHASES = "PERIODIC_AND_RELATED_PHASES",
  PHYSICAL_CHEMISTRY_AND_MOLECULAR_PHYSICS = "PHYSICAL_CHEMISTRY_AND_MOLECULAR_PHYSICS",
  SOLID_STATE_PHYSICS = "SOLID_STATE_PHYSICS",
  SPACE_AND_TIME = "SPACE_AND_TIME",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function sectorFromJSON(object: any): Sector {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return Sector.UNKNOWN;
    case 1:
    case "ACOUSTICS":
      return Sector.ACOUSTICS;
    case 2:
    case "ATOMIC_AND_NUCLEAR_PHYSICS":
      return Sector.ATOMIC_AND_NUCLEAR_PHYSICS;
    case 3:
    case "CHARACTERISTIC_NUMBERS":
      return Sector.CHARACTERISTIC_NUMBERS;
    case 4:
    case "ELECTRICITY_AND_MAGNETISM":
      return Sector.ELECTRICITY_AND_MAGNETISM;
    case 5:
    case "HEAT":
      return Sector.HEAT;
    case 6:
    case "LIGHT_AND_RELATED_ELECTROMAGNETIC_RADIATIONS":
      return Sector.LIGHT_AND_RELATED_ELECTROMAGNETIC_RADIATIONS;
    case 7:
    case "MECHANICS":
      return Sector.MECHANICS;
    case 8:
    case "MISCELLANEOUS":
      return Sector.MISCELLANEOUS;
    case 9:
    case "NUCLEAR_REACTIONS_AND_IONIZING_RADIATIONS":
      return Sector.NUCLEAR_REACTIONS_AND_IONIZING_RADIATIONS;
    case 10:
    case "PERIODIC_AND_RELATED_PHASES":
      return Sector.PERIODIC_AND_RELATED_PHASES;
    case 11:
    case "PHYSICAL_CHEMISTRY_AND_MOLECULAR_PHYSICS":
      return Sector.PHYSICAL_CHEMISTRY_AND_MOLECULAR_PHYSICS;
    case 12:
    case "SOLID_STATE_PHYSICS":
      return Sector.SOLID_STATE_PHYSICS;
    case 13:
    case "SPACE_AND_TIME":
      return Sector.SPACE_AND_TIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Sector.UNRECOGNIZED;
  }
}

export function sectorToJSON(object: Sector): string {
  switch (object) {
    case Sector.UNKNOWN:
      return "UNKNOWN";
    case Sector.ACOUSTICS:
      return "ACOUSTICS";
    case Sector.ATOMIC_AND_NUCLEAR_PHYSICS:
      return "ATOMIC_AND_NUCLEAR_PHYSICS";
    case Sector.CHARACTERISTIC_NUMBERS:
      return "CHARACTERISTIC_NUMBERS";
    case Sector.ELECTRICITY_AND_MAGNETISM:
      return "ELECTRICITY_AND_MAGNETISM";
    case Sector.HEAT:
      return "HEAT";
    case Sector.LIGHT_AND_RELATED_ELECTROMAGNETIC_RADIATIONS:
      return "LIGHT_AND_RELATED_ELECTROMAGNETIC_RADIATIONS";
    case Sector.MECHANICS:
      return "MECHANICS";
    case Sector.MISCELLANEOUS:
      return "MISCELLANEOUS";
    case Sector.NUCLEAR_REACTIONS_AND_IONIZING_RADIATIONS:
      return "NUCLEAR_REACTIONS_AND_IONIZING_RADIATIONS";
    case Sector.PERIODIC_AND_RELATED_PHASES:
      return "PERIODIC_AND_RELATED_PHASES";
    case Sector.PHYSICAL_CHEMISTRY_AND_MOLECULAR_PHYSICS:
      return "PHYSICAL_CHEMISTRY_AND_MOLECULAR_PHYSICS";
    case Sector.SOLID_STATE_PHYSICS:
      return "SOLID_STATE_PHYSICS";
    case Sector.SPACE_AND_TIME:
      return "SPACE_AND_TIME";
    case Sector.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function sectorToNumber(object: Sector): number {
  switch (object) {
    case Sector.UNKNOWN:
      return 0;
    case Sector.ACOUSTICS:
      return 1;
    case Sector.ATOMIC_AND_NUCLEAR_PHYSICS:
      return 2;
    case Sector.CHARACTERISTIC_NUMBERS:
      return 3;
    case Sector.ELECTRICITY_AND_MAGNETISM:
      return 4;
    case Sector.HEAT:
      return 5;
    case Sector.LIGHT_AND_RELATED_ELECTROMAGNETIC_RADIATIONS:
      return 6;
    case Sector.MECHANICS:
      return 7;
    case Sector.MISCELLANEOUS:
      return 8;
    case Sector.NUCLEAR_REACTIONS_AND_IONIZING_RADIATIONS:
      return 9;
    case Sector.PERIODIC_AND_RELATED_PHASES:
      return 10;
    case Sector.PHYSICAL_CHEMISTRY_AND_MOLECULAR_PHYSICS:
      return 11;
    case Sector.SOLID_STATE_PHYSICS:
      return 12;
    case Sector.SPACE_AND_TIME:
      return 13;
    case Sector.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface CodeList {
  items: Code[];
  total_count?: number | undefined;
  subject?: Subject;
}

export interface CodeListResponse {
  items: CodeResponse[];
  total_count: number;
  operation_status?: OperationStatus;
}

export interface CodeResponse {
  payload?: Code;
  status?: Status1;
}

export interface Code {
  id?: string | undefined;
  meta?: Meta | undefined;
  status?: Status | undefined;
  common_code?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  level_category?: string | undefined;
  symbol?: string | undefined;
  conversion_factor?: string | undefined;
  group_number?: string | undefined;
  sector?: Sector | undefined;
  group_id?: string | undefined;
  quantity?: string | undefined;
}

function createBaseCodeList(): CodeList {
  return { items: [], total_count: undefined, subject: undefined };
}

export const CodeList = {
  encode(message: CodeList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Code.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== undefined) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CodeList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodeList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(Code.decode(reader, reader.uint32()));
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

  fromJSON(object: any): CodeList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Code.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: CodeList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? Code.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CodeList>): CodeList {
    return CodeList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CodeList>): CodeList {
    const message = createBaseCodeList();
    message.items = object.items?.map((e) => Code.fromPartial(e)) || [];
    message.total_count = object.total_count ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseCodeListResponse(): CodeListResponse {
  return { items: [], total_count: 0, operation_status: undefined };
}

export const CodeListResponse = {
  encode(message: CodeListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      CodeResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CodeListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodeListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(CodeResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): CodeListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => CodeResponse.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: CodeListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? CodeResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CodeListResponse>): CodeListResponse {
    return CodeListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CodeListResponse>): CodeListResponse {
    const message = createBaseCodeListResponse();
    message.items = object.items?.map((e) => CodeResponse.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
      : undefined;
    return message;
  },
};

function createBaseCodeResponse(): CodeResponse {
  return { payload: undefined, status: undefined };
}

export const CodeResponse = {
  encode(message: CodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      Code.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status1.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CodeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = Code.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.status = Status1.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CodeResponse {
    return {
      payload: isSet(object.payload) ? Code.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status1.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: CodeResponse): unknown {
    const obj: any = {};
    message.payload !== undefined && (obj.payload = message.payload ? Code.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status1.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CodeResponse>): CodeResponse {
    return CodeResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CodeResponse>): CodeResponse {
    const message = createBaseCodeResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? Code.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status1.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseCode(): Code {
  return {
    id: undefined,
    meta: undefined,
    status: undefined,
    common_code: undefined,
    name: undefined,
    description: undefined,
    level_category: undefined,
    symbol: undefined,
    conversion_factor: undefined,
    group_number: undefined,
    sector: undefined,
    group_id: undefined,
    quantity: undefined,
  };
}

export const Code = {
  encode(message: Code, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.status !== undefined) {
      writer.uint32(24).int32(statusToNumber(message.status));
    }
    if (message.common_code !== undefined) {
      writer.uint32(34).string(message.common_code);
    }
    if (message.name !== undefined) {
      writer.uint32(42).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(50).string(message.description);
    }
    if (message.level_category !== undefined) {
      writer.uint32(58).string(message.level_category);
    }
    if (message.symbol !== undefined) {
      writer.uint32(66).string(message.symbol);
    }
    if (message.conversion_factor !== undefined) {
      writer.uint32(74).string(message.conversion_factor);
    }
    if (message.group_number !== undefined) {
      writer.uint32(82).string(message.group_number);
    }
    if (message.sector !== undefined) {
      writer.uint32(88).int32(sectorToNumber(message.sector));
    }
    if (message.group_id !== undefined) {
      writer.uint32(98).string(message.group_id);
    }
    if (message.quantity !== undefined) {
      writer.uint32(106).string(message.quantity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Code {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCode();
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
          if (tag !== 24) {
            break;
          }

          message.status = statusFromJSON(reader.int32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.common_code = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.name = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.description = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.level_category = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.symbol = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.conversion_factor = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.group_number = reader.string();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.sector = sectorFromJSON(reader.int32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.group_id = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.quantity = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Code {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      status: isSet(object.status) ? statusFromJSON(object.status) : undefined,
      common_code: isSet(object.common_code) ? String(object.common_code) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      level_category: isSet(object.level_category) ? String(object.level_category) : undefined,
      symbol: isSet(object.symbol) ? String(object.symbol) : undefined,
      conversion_factor: isSet(object.conversion_factor) ? String(object.conversion_factor) : undefined,
      group_number: isSet(object.group_number) ? String(object.group_number) : undefined,
      sector: isSet(object.sector) ? sectorFromJSON(object.sector) : undefined,
      group_id: isSet(object.group_id) ? String(object.group_id) : undefined,
      quantity: isSet(object.quantity) ? String(object.quantity) : undefined,
    };
  },

  toJSON(message: Code): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.status !== undefined &&
      (obj.status = message.status !== undefined ? statusToJSON(message.status) : undefined);
    message.common_code !== undefined && (obj.common_code = message.common_code);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.level_category !== undefined && (obj.level_category = message.level_category);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.conversion_factor !== undefined && (obj.conversion_factor = message.conversion_factor);
    message.group_number !== undefined && (obj.group_number = message.group_number);
    message.sector !== undefined &&
      (obj.sector = message.sector !== undefined ? sectorToJSON(message.sector) : undefined);
    message.group_id !== undefined && (obj.group_id = message.group_id);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    return obj;
  },

  create(base?: DeepPartial<Code>): Code {
    return Code.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Code>): Code {
    const message = createBaseCode();
    message.id = object.id ?? undefined;
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.status = object.status ?? undefined;
    message.common_code = object.common_code ?? undefined;
    message.name = object.name ?? undefined;
    message.description = object.description ?? undefined;
    message.level_category = object.level_category ?? undefined;
    message.symbol = object.symbol ?? undefined;
    message.conversion_factor = object.conversion_factor ?? undefined;
    message.group_number = object.group_number ?? undefined;
    message.sector = object.sector ?? undefined;
    message.group_id = object.group_id ?? undefined;
    message.quantity = object.quantity ?? undefined;
    return message;
  },
};

export type CodeServiceDefinition = typeof CodeServiceDefinition;
export const CodeServiceDefinition = {
  name: "CodeService",
  fullName: "io.restorecommerce.code.CodeService",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: CodeListResponse,
      responseStream: false,
      options: { _unknownFields: { 248008: [Buffer.from([1])] } },
    },
    create: {
      name: "Create",
      requestType: CodeList,
      requestStream: false,
      responseType: CodeListResponse,
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
      requestType: CodeList,
      requestStream: false,
      responseType: CodeListResponse,
      responseStream: false,
      options: {},
    },
    upsert: {
      name: "Upsert",
      requestType: CodeList,
      requestStream: false,
      responseType: CodeListResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface CodeServiceImplementation<CallContextExt = {}> {
  read(request: ReadRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CodeListResponse>>;
  create(request: CodeList, context: CallContext & CallContextExt): Promise<DeepPartial<CodeListResponse>>;
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
  update(request: CodeList, context: CallContext & CallContextExt): Promise<DeepPartial<CodeListResponse>>;
  upsert(request: CodeList, context: CallContext & CallContextExt): Promise<DeepPartial<CodeListResponse>>;
}

export interface CodeServiceClient<CallOptionsExt = {}> {
  read(request: DeepPartial<ReadRequest>, options?: CallOptions & CallOptionsExt): Promise<CodeListResponse>;
  create(request: DeepPartial<CodeList>, options?: CallOptions & CallOptionsExt): Promise<CodeListResponse>;
  delete(request: DeepPartial<DeleteRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteResponse>;
  update(request: DeepPartial<CodeList>, options?: CallOptions & CallOptionsExt): Promise<CodeListResponse>;
  upsert(request: DeepPartial<CodeList>, options?: CallOptions & CallOptionsExt): Promise<CodeListResponse>;
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
    "name": "io/restorecommerce/code.proto",
    "package": "io.restorecommerce.code",
    "dependency": [
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/options.proto",
    ],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "CodeList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.code.Code",
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
      "name": "CodeListResponse",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.code.CodeResponse",
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
      "name": "CodeResponse",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.code.Code",
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
      "name": "Code",
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
        "name": "status",
        "number": 3,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.code.Status",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "status",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "common_code",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "commonCode",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "name",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "description",
        "number": 6,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
        "jsonName": "description",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "level_category",
        "number": 7,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 6,
        "jsonName": "levelCategory",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "symbol",
        "number": 8,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 7,
        "jsonName": "symbol",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "conversion_factor",
        "number": 9,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 8,
        "jsonName": "conversionFactor",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "group_number",
        "number": 10,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 9,
        "jsonName": "groupNumber",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "sector",
        "number": 11,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.code.Sector",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 10,
        "jsonName": "sector",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "group_id",
        "number": 12,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 11,
        "jsonName": "groupId",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "quantity",
        "number": 13,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 12,
        "jsonName": "quantity",
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
        { "name": "_status", "options": undefined },
        { "name": "_common_code", "options": undefined },
        { "name": "_name", "options": undefined },
        { "name": "_description", "options": undefined },
        { "name": "_level_category", "options": undefined },
        { "name": "_symbol", "options": undefined },
        { "name": "_conversion_factor", "options": undefined },
        { "name": "_group_number", "options": undefined },
        { "name": "_sector", "options": undefined },
        { "name": "_group_id", "options": undefined },
        { "name": "_quantity", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "enumType": [{
      "name": "Status",
      "value": [
        { "name": "ADDED", "number": 0, "options": undefined },
        { "name": "CHANGED_NAME", "number": 1, "options": undefined },
        { "name": "CHANGED_CHARACTERISTIC", "number": 2, "options": undefined },
        { "name": "DEPRECATED", "number": 3, "options": undefined },
        { "name": "MARKED_AS_DELETED", "number": 4, "options": undefined },
        { "name": "REINSTATED", "number": 5, "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "Sector",
      "value": [
        { "name": "UNKNOWN", "number": 0, "options": undefined },
        { "name": "ACOUSTICS", "number": 1, "options": undefined },
        { "name": "ATOMIC_AND_NUCLEAR_PHYSICS", "number": 2, "options": undefined },
        { "name": "CHARACTERISTIC_NUMBERS", "number": 3, "options": undefined },
        { "name": "ELECTRICITY_AND_MAGNETISM", "number": 4, "options": undefined },
        { "name": "HEAT", "number": 5, "options": undefined },
        { "name": "LIGHT_AND_RELATED_ELECTROMAGNETIC_RADIATIONS", "number": 6, "options": undefined },
        { "name": "MECHANICS", "number": 7, "options": undefined },
        { "name": "MISCELLANEOUS", "number": 8, "options": undefined },
        { "name": "NUCLEAR_REACTIONS_AND_IONIZING_RADIATIONS", "number": 9, "options": undefined },
        { "name": "PERIODIC_AND_RELATED_PHASES", "number": 10, "options": undefined },
        { "name": "PHYSICAL_CHEMISTRY_AND_MOLECULAR_PHYSICS", "number": 11, "options": undefined },
        { "name": "SOLID_STATE_PHYSICS", "number": 12, "options": undefined },
        { "name": "SPACE_AND_TIME", "number": 13, "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "service": [{
      "name": "CodeService",
      "method": [{
        "name": "Read",
        "inputType": ".io.restorecommerce.resourcebase.ReadRequest",
        "outputType": ".io.restorecommerce.code.CodeListResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Create",
        "inputType": ".io.restorecommerce.code.CodeList",
        "outputType": ".io.restorecommerce.code.CodeListResponse",
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
        "inputType": ".io.restorecommerce.code.CodeList",
        "outputType": ".io.restorecommerce.code.CodeListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Upsert",
        "inputType": ".io.restorecommerce.code.CodeList",
        "outputType": ".io.restorecommerce.code.CodeListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }],
      "options": undefined,
    }],
    "extension": [],
    "options": undefined,
    "sourceCodeInfo": { "location": [] },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.code.Status": Status,
    ".io.restorecommerce.code.Sector": Sector,
    ".io.restorecommerce.code.CodeList": CodeList,
    ".io.restorecommerce.code.CodeListResponse": CodeListResponse,
    ".io.restorecommerce.code.CodeResponse": CodeResponse,
    ".io.restorecommerce.code.Code": Code,
  },
  dependencies: [protoMetadata2, protoMetadata3, protoMetadata4, protoMetadata5, protoMetadata6],
  options: { services: { "CodeService": { options: undefined, methods: { "Read": { "is_query": true } } } } },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
