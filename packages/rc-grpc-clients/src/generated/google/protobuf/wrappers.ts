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

export interface MetaI {
  readonly meta: 'object' | 'array' | 'map' | 'union' | 'builtin';
}

export interface MetaO extends MetaI {
  readonly meta: 'object';
  readonly type: string;
  readonly name: string;
}

export interface MetaA extends MetaI {
  readonly meta: 'array';
  readonly type: MetaI | string;
}

export interface MetaM extends MetaI {
  readonly meta: 'map';
  readonly key: string;
  readonly value: MetaI | string;
}

export interface MetaU extends MetaI {
  readonly meta: 'union';
  readonly choices: Array<MetaI | string | undefined>;
}

export interface MetaS<T, R> {
  readonly request: MetaO;
  readonly response: MetaO;
  readonly clientStreaming: boolean;
  readonly serverStreaming: boolean;
  readonly encodeRequest?: (message: T, writer: Writer) => Writer;
  readonly decodeResponse?: (input: Uint8Array | Reader, length?: number) => R;
}

export interface MetaB extends MetaI {
  readonly meta: 'builtin';
  readonly type: string;
  readonly original: string;
}

function longToNumber(long: Long) {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

export const protobufPackage = 'google.protobuf'

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
  fromJSON(object: any): DoubleValue {
    const message = { ...baseDoubleValue } as DoubleValue;
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<DoubleValue>): DoubleValue {
    const message = { ...baseDoubleValue } as DoubleValue;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
  toJSON(message: DoubleValue): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
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
  fromJSON(object: any): FloatValue {
    const message = { ...baseFloatValue } as FloatValue;
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<FloatValue>): FloatValue {
    const message = { ...baseFloatValue } as FloatValue;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
  toJSON(message: FloatValue): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
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
  fromJSON(object: any): Int64Value {
    const message = { ...baseInt64Value } as Int64Value;
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Int64Value>): Int64Value {
    const message = { ...baseInt64Value } as Int64Value;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
  toJSON(message: Int64Value): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
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
  fromJSON(object: any): UInt64Value {
    const message = { ...baseUInt64Value } as UInt64Value;
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<UInt64Value>): UInt64Value {
    const message = { ...baseUInt64Value } as UInt64Value;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
  toJSON(message: UInt64Value): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
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
  fromJSON(object: any): Int32Value {
    const message = { ...baseInt32Value } as Int32Value;
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Int32Value>): Int32Value {
    const message = { ...baseInt32Value } as Int32Value;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
  toJSON(message: Int32Value): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
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
  fromJSON(object: any): UInt32Value {
    const message = { ...baseUInt32Value } as UInt32Value;
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<UInt32Value>): UInt32Value {
    const message = { ...baseUInt32Value } as UInt32Value;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
  toJSON(message: UInt32Value): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
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
  fromJSON(object: any): BoolValue {
    const message = { ...baseBoolValue } as BoolValue;
    if (object.value !== undefined && object.value !== null) {
      message.value = Boolean(object.value);
    } else {
      message.value = false;
    }
    return message;
  },
  fromPartial(object: DeepPartial<BoolValue>): BoolValue {
    const message = { ...baseBoolValue } as BoolValue;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = false;
    }
    return message;
  },
  toJSON(message: BoolValue): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
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
  fromJSON(object: any): StringValue {
    const message = { ...baseStringValue } as StringValue;
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<StringValue>): StringValue {
    const message = { ...baseStringValue } as StringValue;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
  toJSON(message: StringValue): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
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
  fromJSON(object: any): BytesValue {
    const message = { ...baseBytesValue } as BytesValue;
    if (object.value !== undefined && object.value !== null) {
      message.value = Buffer.from(bytesFromBase64(object.value));
    }
    return message;
  },
  fromPartial(object: DeepPartial<BytesValue>): BytesValue {
    const message = { ...baseBytesValue } as BytesValue;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = new Buffer(0);
    }
    return message;
  },
  toJSON(message: BytesValue): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Buffer(0)));
    return obj;
  },
};

export const metaDoubleValue: { [key in keyof Required<DoubleValue>]: MetaI | string } = {
  value: {meta:'builtin', type:'number', original:'double'} as MetaB,
}
export const metaFloatValue: { [key in keyof Required<FloatValue>]: MetaI | string } = {
  value: {meta:'builtin', type:'number', original:'float'} as MetaB,
}
export const metaInt64Value: { [key in keyof Required<Int64Value>]: MetaI | string } = {
  value: {meta:'builtin', type:'number', original:'int64'} as MetaB,
}
export const metaUInt64Value: { [key in keyof Required<UInt64Value>]: MetaI | string } = {
  value: {meta:'builtin', type:'number', original:'uint64'} as MetaB,
}
export const metaInt32Value: { [key in keyof Required<Int32Value>]: MetaI | string } = {
  value: {meta:'builtin', type:'number', original:'int32'} as MetaB,
}
export const metaUInt32Value: { [key in keyof Required<UInt32Value>]: MetaI | string } = {
  value: {meta:'builtin', type:'number', original:'uint32'} as MetaB,
}
export const metaBoolValue: { [key in keyof Required<BoolValue>]: MetaI | string } = {
  value: {meta:'builtin', type:'boolean', original:'bool'} as MetaB,
}
export const metaStringValue: { [key in keyof Required<StringValue>]: MetaI | string } = {
  value: {meta:'builtin', type:'string', original:'string'} as MetaB,
}
export const metaBytesValue: { [key in keyof Required<BytesValue>]: MetaI | string } = {
  value: {meta:'builtin', type:'Buffer', original:'bytes'} as MetaB,
}
export const metaPackageGoogleProtobuf: { [key: string]: ['service', string, any, { [key: string]: MetaS<any, any> }] | ['enum', string, any, any] | ['message', string, any, { [key: string]: MetaI | string }] } = {
  DoubleValue: ['message', '.google.protobuf.DoubleValue', DoubleValue, metaDoubleValue],
  FloatValue: ['message', '.google.protobuf.FloatValue', FloatValue, metaFloatValue],
  Int64Value: ['message', '.google.protobuf.Int64Value', Int64Value, metaInt64Value],
  UInt64Value: ['message', '.google.protobuf.UInt64Value', UInt64Value, metaUInt64Value],
  Int32Value: ['message', '.google.protobuf.Int32Value', Int32Value, metaInt32Value],
  UInt32Value: ['message', '.google.protobuf.UInt32Value', UInt32Value, metaUInt32Value],
  BoolValue: ['message', '.google.protobuf.BoolValue', BoolValue, metaBoolValue],
  StringValue: ['message', '.google.protobuf.StringValue', StringValue, metaStringValue],
  BytesValue: ['message', '.google.protobuf.BytesValue', BytesValue, metaBytesValue],
}
if (util.Long !== Long as any) {
  util.Long = Long as any;
  configure();
}

interface WindowBase64 {
  atob(b64: string): string;
  btoa(bin: string): string;
}

const windowBase64 = (globalThis as unknown as WindowBase64);
const atob = windowBase64.atob || ((b64: string) => Buffer.from(b64, 'base64').toString('binary'));
const btoa = windowBase64.btoa || ((bin: string) => Buffer.from(bin, 'binary').toString('base64'));

function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }
  return btoa(bin.join(''));
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