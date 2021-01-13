/* eslint-disable */
import { Meta } from '../../io/restorecommerce/meta';
import { Subject } from '../../io/restorecommerce/auth';
import { ReadRequest, DeleteRequest } from '../../io/restorecommerce/resource_base';
import { Empty } from '../../google/protobuf/empty';
import { Writer, Reader } from 'protobufjs/minimal';


/**
 *  command resource
 */
export interface Command {
  id: string;
  meta?: Meta;
  /**
   *  command name
   */
  name: string;
  /**
   *  all possible parameters
   */
  parameters: CommandParameter[];
  /**
   *  command description
   */
  description: string;
}

export interface CommandParameter {
  /**
   *   field name
   */
  field: string;
  /**
   *  field description
   */
  description: string;
  /**
   *  field's type
   */
  type: CommandParameter_ParameterType;
  /**
   *  dump properties in case of `object_value``
   */
  properties: string;
}

export interface CommandList {
  items: Command[];
  totalCount: number;
  subject?: Subject;
}

const baseCommand: object = {
  id: "",
  name: "",
  description: "",
};

const baseCommandParameter: object = {
  field: "",
  description: "",
  type: 0,
  properties: "",
};

const baseCommandList: object = {
  totalCount: 0,
};

export interface Service {

  Read(request: ReadRequest): Promise<CommandList>;

  Create(request: CommandList): Promise<CommandList>;

  Delete(request: DeleteRequest): Promise<Empty>;

  Update(request: CommandList): Promise<CommandList>;

  Upsert(request: CommandList): Promise<CommandList>;

}

export interface MetaBase {
  readonly kind: 'object' | 'array' | 'map' | 'union' | 'builtin';
}

export interface MetaMessage extends MetaBase {
  readonly kind: 'object';
  readonly type: string;
  readonly name: string;
}

export interface MetaArray extends MetaBase {
  readonly kind: 'array';
  readonly type: MetaBase | string;
}

export interface MetaMap extends MetaBase {
  readonly kind: 'map';
  readonly key: string;
  readonly value: MetaBase | string;
}

export interface MetaUnion extends MetaBase {
  readonly kind: 'union';
  readonly choices: Array<MetaBase | string | undefined>;
}

export interface MetaService<T, R> {
  readonly request: MetaMessage;
  readonly response: MetaMessage;
  readonly clientStreaming: boolean;
  readonly serverStreaming: boolean;
  readonly encodeRequest?: (message: T, writer: Writer) => Writer;
  readonly decodeResponse?: (input: Uint8Array | Reader, length?: number) => R;
}

export interface MetaPrimitive extends MetaBase {
  readonly kind: 'builtin';
  readonly type: string;
  readonly original: string;
}

export const protobufPackage = 'io.restorecommerce.command'

export enum CommandParameter_ParameterType {
  boolean_value = 0,
  object_value = 1,
  array_value = 2,
  number_value = 3,
  string_value = 4,
  UNRECOGNIZED = -1,
}

export function commandParameter_ParameterTypeFromJSON(object: any): CommandParameter_ParameterType {
  switch (object) {
    case 0:
    case "boolean_value":
      return CommandParameter_ParameterType.boolean_value;
    case 1:
    case "object_value":
      return CommandParameter_ParameterType.object_value;
    case 2:
    case "array_value":
      return CommandParameter_ParameterType.array_value;
    case 3:
    case "number_value":
      return CommandParameter_ParameterType.number_value;
    case 4:
    case "string_value":
      return CommandParameter_ParameterType.string_value;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CommandParameter_ParameterType.UNRECOGNIZED;
  }
}

export function commandParameter_ParameterTypeToJSON(object: CommandParameter_ParameterType): string {
  switch (object) {
    case CommandParameter_ParameterType.boolean_value:
      return "boolean_value";
    case CommandParameter_ParameterType.object_value:
      return "object_value";
    case CommandParameter_ParameterType.array_value:
      return "array_value";
    case CommandParameter_ParameterType.number_value:
      return "number_value";
    case CommandParameter_ParameterType.string_value:
      return "string_value";
    default:
      return "UNKNOWN";
  }
}

export const Command = {
  encode(message: Command, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.name);
    for (const v of message.parameters) {
      CommandParameter.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(42).string(message.description);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Command {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommand } as Command;
    message.parameters = [];
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
          message.name = reader.string();
          break;
        case 4:
          message.parameters.push(CommandParameter.decode(reader, reader.uint32()));
          break;
        case 5:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Command {
    const message = { ...baseCommand } as Command;
    message.parameters = [];
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
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.parameters !== undefined && object.parameters !== null) {
      for (const e of object.parameters) {
        message.parameters.push(CommandParameter.fromJSON(e));
      }
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Command>): Command {
    const message = { ...baseCommand } as Command;
    message.parameters = [];
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
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.parameters !== undefined && object.parameters !== null) {
      for (const e of object.parameters) {
        message.parameters.push(CommandParameter.fromPartial(e));
      }
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    return message;
  },
  toJSON(message: Command): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    if (message.parameters) {
      obj.parameters = message.parameters.map(e => e ? CommandParameter.toJSON(e) : undefined);
    } else {
      obj.parameters = [];
    }
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },
};

export const CommandParameter = {
  encode(message: CommandParameter, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.field);
    writer.uint32(18).string(message.description);
    writer.uint32(24).int32(message.type);
    writer.uint32(34).string(message.properties);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CommandParameter {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommandParameter } as CommandParameter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.field = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.type = reader.int32() as any;
          break;
        case 4:
          message.properties = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CommandParameter {
    const message = { ...baseCommandParameter } as CommandParameter;
    if (object.field !== undefined && object.field !== null) {
      message.field = String(object.field);
    } else {
      message.field = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = commandParameter_ParameterTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.properties !== undefined && object.properties !== null) {
      message.properties = String(object.properties);
    } else {
      message.properties = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<CommandParameter>): CommandParameter {
    const message = { ...baseCommandParameter } as CommandParameter;
    if (object.field !== undefined && object.field !== null) {
      message.field = object.field;
    } else {
      message.field = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.properties !== undefined && object.properties !== null) {
      message.properties = object.properties;
    } else {
      message.properties = "";
    }
    return message;
  },
  toJSON(message: CommandParameter): unknown {
    const obj: any = {};
    message.field !== undefined && (obj.field = message.field);
    message.description !== undefined && (obj.description = message.description);
    message.type !== undefined && (obj.type = commandParameter_ParameterTypeToJSON(message.type));
    message.properties !== undefined && (obj.properties = message.properties);
    return obj;
  },
};

export const CommandList = {
  encode(message: CommandList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Command.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(16).uint32(message.totalCount);
    if (message.subject !== undefined && message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CommandList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommandList } as CommandList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Command.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalCount = reader.uint32();
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
  fromJSON(object: any): CommandList {
    const message = { ...baseCommandList } as CommandList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Command.fromJSON(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = Number(object.totalCount);
    } else {
      message.totalCount = 0;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<CommandList>): CommandList {
    const message = { ...baseCommandList } as CommandList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Command.fromPartial(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = object.totalCount;
    } else {
      message.totalCount = 0;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },
  toJSON(message: CommandList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? Command.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },
};

export const metaCommand: { [key in keyof Required<Command>]: MetaBase | string } = {
  id: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  meta: {kind:'object', type:'.io.restorecommerce.meta.Meta', name:'Meta'} as MetaMessage,
  name: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  parameters: {kind:'array', type:{kind:'object', type:'.io.restorecommerce.command.CommandParameter', name:'CommandParameter'} as MetaMessage} as MetaArray,
  description: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
}
export const metaCommandParameter: { [key in keyof Required<CommandParameter>]: MetaBase | string } = {
  field: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  description: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  type: {kind:'object', type:'.io.restorecommerce.command.CommandParameter.ParameterType', name:'CommandParameter_ParameterType'} as MetaMessage,
  properties: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
}
export const metaCommandList: { [key in keyof Required<CommandList>]: MetaBase | string } = {
  items: {kind:'array', type:{kind:'object', type:'.io.restorecommerce.command.Command', name:'Command'} as MetaMessage} as MetaArray,
  totalCount: {kind:'builtin', type:'number', original:'uint32'} as MetaPrimitive,
  subject: {kind:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaMessage,
}
export const metaService: { [key in keyof Service]: MetaService<any, any> } = {
  Read: {request: {kind:'object', type:'.io.restorecommerce.resourcebase.ReadRequest', name:'ReadRequest'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.command.CommandList', name:'CommandList'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: ReadRequest.encode, decodeResponse: CommandList.decode} as MetaService<ReadRequest, CommandList>,
  Create: {request: {kind:'object', type:'.io.restorecommerce.command.CommandList', name:'CommandList'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.command.CommandList', name:'CommandList'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: CommandList.encode, decodeResponse: CommandList.decode} as MetaService<CommandList, CommandList>,
  Delete: {request: {kind:'object', type:'.io.restorecommerce.resourcebase.DeleteRequest', name:'DeleteRequest'} as MetaMessage, response: {kind:'object', type:'.google.protobuf.Empty', name:'Empty'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: DeleteRequest.encode, decodeResponse: Empty.decode} as MetaService<DeleteRequest, Empty>,
  Update: {request: {kind:'object', type:'.io.restorecommerce.command.CommandList', name:'CommandList'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.command.CommandList', name:'CommandList'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: CommandList.encode, decodeResponse: CommandList.decode} as MetaService<CommandList, CommandList>,
  Upsert: {request: {kind:'object', type:'.io.restorecommerce.command.CommandList', name:'CommandList'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.command.CommandList', name:'CommandList'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: CommandList.encode, decodeResponse: CommandList.decode} as MetaService<CommandList, CommandList>,
}
export const metadata: { [key: string]: ['service', string, any, { [key: string]: MetaService<any, any> }] | ['enum', string, any, any] | ['message', string, any, { [key: string]: MetaBase | string }] } = {
  Command: ['message', '.io.restorecommerce.command.Command', Command, metaCommand],
  CommandParameter: ['message', '.io.restorecommerce.command.CommandParameter', CommandParameter, metaCommandParameter],
  CommandParameter_ParameterType: ['enum', '.io.restorecommerce.command.CommandParameter.ParameterType', CommandParameter_ParameterType, undefined],
  CommandList: ['message', '.io.restorecommerce.command.CommandList', CommandList, metaCommandList],
  Service: ['service', '.io.restorecommerce.command.Service', undefined, metaService],
}
type Builtin = Date | Function | Uint8Array | string | number | undefined;
type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;