/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal';


/**
 * / `Struct` represents a structured data value, consisting of fields
 * / which map to dynamically typed values. In some languages, `Struct`
 * / might be supported by a native representation. For example, in
 * / scripting languages like JS a struct is represented as an
 * / object. The details of that representation are described together
 * / with the proto support for the language.
 * /
 * / The JSON representation for `Struct` is JSON object.
 */
export interface Struct {
  /**
   * / Unordered map of dynamically typed values.
   */
  fields: { [key: string]: Value };
}

export interface Struct_FieldsEntry {
  key: string;
  value?: Value;
}

/**
 * / `Value` represents a dynamically typed value which can be either
 * / null, a number, a string, a boolean, a recursive struct value, or a
 * / list of values. A producer of value is expected to set one of that
 * / variants, absence of any variant indicates an error.
 * /
 * / The JSON representation for `Value` is JSON value.
 */
export interface Value {
  /**
   * / Represents a null value.
   */
  nullValue: NullValue | undefined;
  /**
   * / Represents a double value.
   */
  numberValue: number | undefined;
  /**
   * / Represents a string value.
   */
  stringValue: string | undefined;
  /**
   * / Represents a boolean value.
   */
  boolValue: boolean | undefined;
  /**
   * / Represents a structured value.
   */
  structValue?: Struct | undefined;
  /**
   * / Represents a repeated `Value`.
   */
  listValue?: ListValue | undefined;
}

/**
 * / `ListValue` is a wrapper around a repeated field of values.
 * /
 * / The JSON representation for `ListValue` is JSON array.
 */
export interface ListValue {
  /**
   * / Repeated field of dynamically typed values.
   */
  values: Value[];
}

const baseStruct: object = {
};

const baseStruct_FieldsEntry: object = {
  key: "",
};

const baseValue: object = {
};

const baseListValue: object = {
};

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

export const protobufPackage = 'google.protobuf'

/** / `NullValue` is a singleton enumeration to represent the null value for the
/ `Value` type union.
/
/  The JSON representation for `NullValue` is JSON `null`.
 */
export enum NullValue {
  /** NULL_VALUE - / Null value.
   */
  NULL_VALUE = 0,
  UNRECOGNIZED = -1,
}

export function nullValueFromJSON(object: any): NullValue {
  switch (object) {
    case 0:
    case "NULL_VALUE":
      return NullValue.NULL_VALUE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NullValue.UNRECOGNIZED;
  }
}

export function nullValueToJSON(object: NullValue): string {
  switch (object) {
    case NullValue.NULL_VALUE:
      return "NULL_VALUE";
    default:
      return "UNKNOWN";
  }
}

export const Struct = {
  encode(message: Struct, writer: Writer = Writer.create()): Writer {
    Object.entries(message.fields).forEach(([key, value]) => {
      Struct_FieldsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    })
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Struct {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStruct } as Struct;
    message.fields = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = Struct_FieldsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.fields[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Struct {
    const message = { ...baseStruct } as Struct;
    message.fields = {};
    if (object.fields !== undefined && object.fields !== null) {
      Object.entries(object.fields).forEach(([key, value]) => {
        message.fields[key] = Value.fromJSON(value);
      })
    }
    return message;
  },
  fromPartial(object: DeepPartial<Struct>): Struct {
    const message = { ...baseStruct } as Struct;
    message.fields = {};
    if (object.fields !== undefined && object.fields !== null) {
      Object.entries(object.fields).forEach(([key, value]) => {
        if (value !== undefined) {
          message.fields[key] = Value.fromPartial(value);
        }
      })
    }
    return message;
  },
  toJSON(message: Struct): unknown {
    const obj: any = {};
    obj.fields = {};
    if (message.fields) {
      Object.entries(message.fields).forEach(([k, v]) => {
        obj.fields[k] = Value.toJSON(v);
      })
    }
    return obj;
  },
};

export const Struct_FieldsEntry = {
  encode(message: Struct_FieldsEntry, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.key);
    if (message.value !== undefined && message.value !== undefined) {
      Value.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Struct_FieldsEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStruct_FieldsEntry } as Struct_FieldsEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Value.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Struct_FieldsEntry {
    const message = { ...baseStruct_FieldsEntry } as Struct_FieldsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Value.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Struct_FieldsEntry>): Struct_FieldsEntry {
    const message = { ...baseStruct_FieldsEntry } as Struct_FieldsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Value.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
  toJSON(message: Struct_FieldsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? Value.toJSON(message.value) : undefined);
    return obj;
  },
};

export const Value = {
  encode(message: Value, writer: Writer = Writer.create()): Writer {
    if (message.nullValue !== undefined) {
      writer.uint32(8).int32(message.nullValue);
    }
    if (message.numberValue !== undefined) {
      writer.uint32(17).double(message.numberValue);
    }
    if (message.stringValue !== undefined) {
      writer.uint32(26).string(message.stringValue);
    }
    if (message.boolValue !== undefined) {
      writer.uint32(32).bool(message.boolValue);
    }
    if (message.structValue !== undefined) {
      Struct.encode(message.structValue, writer.uint32(42).fork()).ldelim();
    }
    if (message.listValue !== undefined) {
      ListValue.encode(message.listValue, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Value {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseValue } as Value;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nullValue = reader.int32() as any;
          break;
        case 2:
          message.numberValue = reader.double();
          break;
        case 3:
          message.stringValue = reader.string();
          break;
        case 4:
          message.boolValue = reader.bool();
          break;
        case 5:
          message.structValue = Struct.decode(reader, reader.uint32());
          break;
        case 6:
          message.listValue = ListValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Value {
    const message = { ...baseValue } as Value;
    if (object.nullValue !== undefined && object.nullValue !== null) {
      message.nullValue = nullValueFromJSON(object.nullValue);
    } else {
      message.nullValue = undefined;
    }
    if (object.numberValue !== undefined && object.numberValue !== null) {
      message.numberValue = Number(object.numberValue);
    } else {
      message.numberValue = undefined;
    }
    if (object.stringValue !== undefined && object.stringValue !== null) {
      message.stringValue = String(object.stringValue);
    } else {
      message.stringValue = undefined;
    }
    if (object.boolValue !== undefined && object.boolValue !== null) {
      message.boolValue = Boolean(object.boolValue);
    } else {
      message.boolValue = undefined;
    }
    if (object.structValue !== undefined && object.structValue !== null) {
      message.structValue = Struct.fromJSON(object.structValue);
    } else {
      message.structValue = undefined;
    }
    if (object.listValue !== undefined && object.listValue !== null) {
      message.listValue = ListValue.fromJSON(object.listValue);
    } else {
      message.listValue = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Value>): Value {
    const message = { ...baseValue } as Value;
    if (object.nullValue !== undefined && object.nullValue !== null) {
      message.nullValue = object.nullValue;
    } else {
      message.nullValue = undefined;
    }
    if (object.numberValue !== undefined && object.numberValue !== null) {
      message.numberValue = object.numberValue;
    } else {
      message.numberValue = undefined;
    }
    if (object.stringValue !== undefined && object.stringValue !== null) {
      message.stringValue = object.stringValue;
    } else {
      message.stringValue = undefined;
    }
    if (object.boolValue !== undefined && object.boolValue !== null) {
      message.boolValue = object.boolValue;
    } else {
      message.boolValue = undefined;
    }
    if (object.structValue !== undefined && object.structValue !== null) {
      message.structValue = Struct.fromPartial(object.structValue);
    } else {
      message.structValue = undefined;
    }
    if (object.listValue !== undefined && object.listValue !== null) {
      message.listValue = ListValue.fromPartial(object.listValue);
    } else {
      message.listValue = undefined;
    }
    return message;
  },
  toJSON(message: Value): unknown {
    const obj: any = {};
    message.nullValue !== undefined && (obj.nullValue = message.nullValue !== undefined ? nullValueToJSON(message.nullValue) : undefined);
    message.numberValue !== undefined && (obj.numberValue = message.numberValue);
    message.stringValue !== undefined && (obj.stringValue = message.stringValue);
    message.boolValue !== undefined && (obj.boolValue = message.boolValue);
    message.structValue !== undefined && (obj.structValue = message.structValue ? Struct.toJSON(message.structValue) : undefined);
    message.listValue !== undefined && (obj.listValue = message.listValue ? ListValue.toJSON(message.listValue) : undefined);
    return obj;
  },
};

export const ListValue = {
  encode(message: ListValue, writer: Writer = Writer.create()): Writer {
    for (const v of message.values) {
      Value.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ListValue {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListValue } as ListValue;
    message.values = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(Value.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListValue {
    const message = { ...baseListValue } as ListValue;
    message.values = [];
    if (object.values !== undefined && object.values !== null) {
      for (const e of object.values) {
        message.values.push(Value.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ListValue>): ListValue {
    const message = { ...baseListValue } as ListValue;
    message.values = [];
    if (object.values !== undefined && object.values !== null) {
      for (const e of object.values) {
        message.values.push(Value.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: ListValue): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map(e => e ? Value.toJSON(e) : undefined);
    } else {
      obj.values = [];
    }
    return obj;
  },
};

export const metaStruct: { [key in keyof Required<Struct>]: MetaBase | string } = {
  fields: {kind:'map', key:'string', value:{kind:'object', type:'.google.protobuf.Value', name:'Value'} as MetaMessage} as MetaMap,
}
export const metaStruct_FieldsEntry: { [key in keyof Required<Struct_FieldsEntry>]: MetaBase | string } = {
  key: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  value: {kind:'object', type:'.google.protobuf.Value', name:'Value'} as MetaMessage,
}
export const metaValue: { [key in keyof Required<Value>]: MetaBase | string } = {
  nullValue: {kind:'union', choices: [undefined, {kind:'object', type:'.google.protobuf.NullValue', name:'NullValue'} as MetaMessage]} as MetaUnion,
  numberValue: {kind:'union', choices: [undefined, {kind:'builtin', type:'number', original:'double'} as MetaPrimitive]} as MetaUnion,
  stringValue: {kind:'union', choices: [undefined, {kind:'builtin', type:'string', original:'string'} as MetaPrimitive]} as MetaUnion,
  boolValue: {kind:'union', choices: [undefined, {kind:'builtin', type:'boolean', original:'bool'} as MetaPrimitive]} as MetaUnion,
  structValue: {kind:'union', choices: [undefined, {kind:'object', type:'.google.protobuf.Struct', name:'Struct'} as MetaMessage]} as MetaUnion,
  listValue: {kind:'union', choices: [undefined, {kind:'object', type:'.google.protobuf.ListValue', name:'ListValue'} as MetaMessage]} as MetaUnion,
}
export const metaListValue: { [key in keyof Required<ListValue>]: MetaBase | string } = {
  values: {kind:'array', type:{kind:'object', type:'.google.protobuf.Value', name:'Value'} as MetaMessage} as MetaArray,
}
export const metadata: { [key: string]: ['service', string, any, { [key: string]: MetaService<any, any> }] | ['enum', string, any, any] | ['message', string, any, { [key: string]: MetaBase | string }] } = {
  NullValue: ['enum', '.google.protobuf.NullValue', NullValue, undefined],
  Struct: ['message', '.google.protobuf.Struct', Struct, metaStruct],
  Struct_FieldsEntry: ['message', '.google.protobuf.Struct.FieldsEntry', Struct_FieldsEntry, metaStruct_FieldsEntry],
  Value: ['message', '.google.protobuf.Value', Value, metaValue],
  ListValue: ['message', '.google.protobuf.ListValue', ListValue, metaListValue],
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