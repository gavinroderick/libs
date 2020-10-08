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
};
