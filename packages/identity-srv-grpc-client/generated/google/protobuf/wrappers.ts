/* eslint-disable */
import * as Long from 'long';
import { Writer, Reader, util, configure } from 'protobufjs/minimal';


/**
 *  Wrapper message for `double`.
 *
 *  The JSON representation for `DoubleValue` is JSON number.
 */
export interface DoubleValue {
  /**
   *  The double value.
   */
  value: number;
}

/**
 *  Wrapper message for `float`.
 *
 *  The JSON representation for `FloatValue` is JSON number.
 */
export interface FloatValue {
  /**
   *  The float value.
   */
  value: number;
}

/**
 *  Wrapper message for `int64`.
 *
 *  The JSON representation for `Int64Value` is JSON string.
 */
export interface Int64Value {
  /**
   *  The int64 value.
   */
  value: number;
}

/**
 *  Wrapper message for `uint64`.
 *
 *  The JSON representation for `UInt64Value` is JSON string.
 */
export interface UInt64Value {
  /**
   *  The uint64 value.
   */
  value: number;
}

/**
 *  Wrapper message for `int32`.
 *
 *  The JSON representation for `Int32Value` is JSON number.
 */
export interface Int32Value {
  /**
   *  The int32 value.
   */
  value: number;
}

/**
 *  Wrapper message for `uint32`.
 *
 *  The JSON representation for `UInt32Value` is JSON number.
 */
export interface UInt32Value {
  /**
   *  The uint32 value.
   */
  value: number;
}

/**
 *  Wrapper message for `bool`.
 *
 *  The JSON representation for `BoolValue` is JSON `true` and `false`.
 */
export interface BoolValue {
  /**
   *  The bool value.
   */
  value: boolean;
}

/**
 *  Wrapper message for `string`.
 *
 *  The JSON representation for `StringValue` is JSON string.
 */
export interface StringValue {
  /**
   *  The string value.
   */
  value: string;
}

/**
 *  Wrapper message for `bytes`.
 *
 *  The JSON representation for `BytesValue` is JSON string.
 */
export interface BytesValue {
  /**
   *  The bytes value.
   */
  value: Buffer;
}

const baseDoubleValue: object = {
  value: 0,
};

const baseFloatValue: object = {
  value: 0,
};

const baseInt64Value: object = {
  value: 0,
};

const baseUInt64Value: object = {
  value: 0,
};

const baseInt32Value: object = {
  value: 0,
};

const baseUInt32Value: object = {
  value: 0,
};

const baseBoolValue: object = {
  value: false,
};

const baseStringValue: object = {
  value: "",
};

const baseBytesValue: object = {
};

function longToNumber(long: Long) {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

export const DoubleValue = {
  encode(message: DoubleValue, writer: Writer = Writer.create()): Writer {
    writer.uint32(9).double(message.value);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): DoubleValue {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDoubleValue } as DoubleValue;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const FloatValue = {
  encode(message: FloatValue, writer: Writer = Writer.create()): Writer {
    writer.uint32(13).float(message.value);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): FloatValue {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFloatValue } as FloatValue;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const Int64Value = {
  encode(message: Int64Value, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int64(message.value);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Int64Value {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInt64Value } as Int64Value;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const UInt64Value = {
  encode(message: UInt64Value, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.value);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): UInt64Value {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUInt64Value } as UInt64Value;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const Int32Value = {
  encode(message: Int32Value, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.value);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Int32Value {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInt32Value } as Int32Value;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const UInt32Value = {
  encode(message: UInt32Value, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.value);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): UInt32Value {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUInt32Value } as UInt32Value;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const BoolValue = {
  encode(message: BoolValue, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).bool(message.value);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): BoolValue {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBoolValue } as BoolValue;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const StringValue = {
  encode(message: StringValue, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.value);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): StringValue {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStringValue } as StringValue;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

export const BytesValue = {
  encode(message: BytesValue, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).bytes(message.value);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): BytesValue {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBytesValue } as BytesValue;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

if (util.Long !== Long as any) {
  util.Long = Long as any;
  configure();
}
