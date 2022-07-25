/* eslint-disable */
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import {
  Status,
  OperationStatus,
  protoMetadata as protoMetadata4,
} from "../io/restorecommerce/status";
import {
  Meta,
  protoMetadata as protoMetadata3,
} from "../io/restorecommerce/meta";
import { Any, protoMetadata as protoMetadata1 } from "../google/protobuf/any";
import { CallContext, CallOptions } from "nice-grpc-common";
import {
  protoMetadata as protoMetadata2,
  ReadRequest,
} from "../io/restorecommerce/resource_base";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "test";

export interface TestRequest {
  value: string;
}

export interface StreamTestResponse {
  result: string;
}

export interface TestResponse {
  result: string;
  status?: Status;
}

export interface TestEvent {
  value: string;
  count: number;
}

export interface TestBufferedData {
  id: string;
  meta?: Meta;
  value: string;
  count: number;
  data?: Any;
}

export interface TestBufferedDataList {
  items: TestBufferedData[];
  totalCount: number;
}

export interface TestBufferedDataResponse {
  payload?: TestBufferedData;
  status?: Status;
}

export interface TestBufferedDataListResponse {
  items: TestBufferedDataResponse[];
  totalCount: number;
  operationStatus?: OperationStatus;
}

export interface ExtendMe {
  bar: number;
}

function createBaseTestRequest(): TestRequest {
  return { value: "" };
}

export const TestRequest = {
  encode(
    message: TestRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestRequest();
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

  fromJSON(object: any): TestRequest {
    return {
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: TestRequest): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<TestRequest>): TestRequest {
    const message = createBaseTestRequest();
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseStreamTestResponse(): StreamTestResponse {
  return { result: "" };
}

export const StreamTestResponse = {
  encode(
    message: StreamTestResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.result !== "") {
      writer.uint32(10).string(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamTestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamTestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StreamTestResponse {
    return {
      result: isSet(object.result) ? String(object.result) : "",
    };
  },

  toJSON(message: StreamTestResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result);
    return obj;
  },

  fromPartial(object: DeepPartial<StreamTestResponse>): StreamTestResponse {
    const message = createBaseStreamTestResponse();
    message.result = object.result ?? "";
    return message;
  },
};

function createBaseTestResponse(): TestResponse {
  return { result: "", status: undefined };
}

export const TestResponse = {
  encode(
    message: TestResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.result !== "") {
      writer.uint32(10).string(message.result);
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.string();
          break;
        case 4:
          message.status = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestResponse {
    return {
      result: isSet(object.result) ? String(object.result) : "",
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: TestResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TestResponse>): TestResponse {
    const message = createBaseTestResponse();
    message.result = object.result ?? "";
    message.status =
      object.status !== undefined && object.status !== null
        ? Status.fromPartial(object.status)
        : undefined;
    return message;
  },
};

function createBaseTestEvent(): TestEvent {
  return { value: "", count: 0 };
}

export const TestEvent = {
  encode(
    message: TestEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    if (message.count !== 0) {
      writer.uint32(16).int32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        case 2:
          message.count = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestEvent {
    return {
      value: isSet(object.value) ? String(object.value) : "",
      count: isSet(object.count) ? Number(object.count) : 0,
    };
  },

  toJSON(message: TestEvent): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    message.count !== undefined && (obj.count = Math.round(message.count));
    return obj;
  },

  fromPartial(object: DeepPartial<TestEvent>): TestEvent {
    const message = createBaseTestEvent();
    message.value = object.value ?? "";
    message.count = object.count ?? 0;
    return message;
  },
};

function createBaseTestBufferedData(): TestBufferedData {
  return { id: "", meta: undefined, value: "", count: 0, data: undefined };
}

export const TestBufferedData = {
  encode(
    message: TestBufferedData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    if (message.count !== 0) {
      writer.uint32(32).int32(message.count);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestBufferedData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestBufferedData();
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
          message.value = reader.string();
          break;
        case 4:
          message.count = reader.int32();
          break;
        case 5:
          message.data = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestBufferedData {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      value: isSet(object.value) ? String(object.value) : "",
      count: isSet(object.count) ? Number(object.count) : 0,
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: TestBufferedData): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined &&
      (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.value !== undefined && (obj.value = message.value);
    message.count !== undefined && (obj.count = Math.round(message.count));
    message.data !== undefined &&
      (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TestBufferedData>): TestBufferedData {
    const message = createBaseTestBufferedData();
    message.id = object.id ?? "";
    message.meta =
      object.meta !== undefined && object.meta !== null
        ? Meta.fromPartial(object.meta)
        : undefined;
    message.value = object.value ?? "";
    message.count = object.count ?? 0;
    message.data =
      object.data !== undefined && object.data !== null
        ? Any.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseTestBufferedDataList(): TestBufferedDataList {
  return { items: [], totalCount: 0 };
}

export const TestBufferedDataList = {
  encode(
    message: TestBufferedDataList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      TestBufferedData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestBufferedDataList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestBufferedDataList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(TestBufferedData.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestBufferedDataList {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => TestBufferedData.fromJSON(e))
        : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
    };
  },

  toJSON(message: TestBufferedDataList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? TestBufferedData.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined &&
      (obj.totalCount = Math.round(message.totalCount));
    return obj;
  },

  fromPartial(object: DeepPartial<TestBufferedDataList>): TestBufferedDataList {
    const message = createBaseTestBufferedDataList();
    message.items =
      object.items?.map((e) => TestBufferedData.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    return message;
  },
};

function createBaseTestBufferedDataResponse(): TestBufferedDataResponse {
  return { payload: undefined, status: undefined };
}

export const TestBufferedDataResponse = {
  encode(
    message: TestBufferedDataResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.payload !== undefined) {
      TestBufferedData.encode(
        message.payload,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestBufferedDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestBufferedDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = TestBufferedData.decode(reader, reader.uint32());
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

  fromJSON(object: any): TestBufferedDataResponse {
    return {
      payload: isSet(object.payload)
        ? TestBufferedData.fromJSON(object.payload)
        : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: TestBufferedDataResponse): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? TestBufferedData.toJSON(message.payload)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestBufferedDataResponse>
  ): TestBufferedDataResponse {
    const message = createBaseTestBufferedDataResponse();
    message.payload =
      object.payload !== undefined && object.payload !== null
        ? TestBufferedData.fromPartial(object.payload)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? Status.fromPartial(object.status)
        : undefined;
    return message;
  },
};

function createBaseTestBufferedDataListResponse(): TestBufferedDataListResponse {
  return { items: [], totalCount: 0, operationStatus: undefined };
}

export const TestBufferedDataListResponse = {
  encode(
    message: TestBufferedDataListResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      TestBufferedDataResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(
        message.operationStatus,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TestBufferedDataListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestBufferedDataListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            TestBufferedDataResponse.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.totalCount = reader.uint32();
          break;
        case 3:
          message.operationStatus = OperationStatus.decode(
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

  fromJSON(object: any): TestBufferedDataListResponse {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => TestBufferedDataResponse.fromJSON(e))
        : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      operationStatus: isSet(object.operationStatus)
        ? OperationStatus.fromJSON(object.operationStatus)
        : undefined,
    };
  },

  toJSON(message: TestBufferedDataListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? TestBufferedDataResponse.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined &&
      (obj.totalCount = Math.round(message.totalCount));
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus
        ? OperationStatus.toJSON(message.operationStatus)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TestBufferedDataListResponse>
  ): TestBufferedDataListResponse {
    const message = createBaseTestBufferedDataListResponse();
    message.items =
      object.items?.map((e) => TestBufferedDataResponse.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.operationStatus =
      object.operationStatus !== undefined && object.operationStatus !== null
        ? OperationStatus.fromPartial(object.operationStatus)
        : undefined;
    return message;
  },
};

function createBaseExtendMe(): ExtendMe {
  return { bar: 0 };
}

export const ExtendMe = {
  encode(
    message: ExtendMe,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bar !== 0) {
      writer.uint32(1008).int32(message.bar);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExtendMe {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtendMe();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 126:
          message.bar = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExtendMe {
    return {
      bar: isSet(object.bar) ? Number(object.bar) : 0,
    };
  },

  toJSON(message: ExtendMe): unknown {
    const obj: any = {};
    message.bar !== undefined && (obj.bar = Math.round(message.bar));
    return obj;
  },

  fromPartial(object: DeepPartial<ExtendMe>): ExtendMe {
    const message = createBaseExtendMe();
    message.bar = object.bar ?? 0;
    return message;
  },
};

export type TestDefinition = typeof TestDefinition;
export const TestDefinition = {
  name: "Test",
  fullName: "test.Test",
  methods: {
    test: {
      name: "Test",
      requestType: TestRequest,
      requestStream: false,
      responseType: TestResponse,
      responseStream: false,
      options: {},
    },
    throw: {
      name: "Throw",
      requestType: TestRequest,
      requestStream: false,
      responseType: TestResponse,
      responseStream: false,
      options: {},
    },
    notImplemented: {
      name: "NotImplemented",
      requestType: TestRequest,
      requestStream: false,
      responseType: TestResponse,
      responseStream: false,
      options: {},
    },
    notFound: {
      name: "NotFound",
      requestType: TestRequest,
      requestStream: false,
      responseType: TestResponse,
      responseStream: false,
      options: {},
    },
    create: {
      name: "Create",
      requestType: TestBufferedDataList,
      requestStream: false,
      responseType: TestBufferedDataListResponse,
      responseStream: false,
      options: {},
    },
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: TestBufferedDataListResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface TestServiceImplementation<CallContextExt = {}> {
  test(
    request: TestRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<TestResponse>>;
  throw(
    request: TestRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<TestResponse>>;
  notImplemented(
    request: TestRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<TestResponse>>;
  notFound(
    request: TestRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<TestResponse>>;
  create(
    request: TestBufferedDataList,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<TestBufferedDataListResponse>>;
  read(
    request: ReadRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<TestBufferedDataListResponse>>;
}

export interface TestClient<CallOptionsExt = {}> {
  test(
    request: DeepPartial<TestRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<TestResponse>;
  throw(
    request: DeepPartial<TestRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<TestResponse>;
  notImplemented(
    request: DeepPartial<TestRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<TestResponse>;
  notFound(
    request: DeepPartial<TestRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<TestResponse>;
  create(
    request: DeepPartial<TestBufferedDataList>,
    options?: CallOptions & CallOptionsExt
  ): Promise<TestBufferedDataListResponse>;
  read(
    request: DeepPartial<ReadRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<TestBufferedDataListResponse>;
}

/** Stream test service */
export type StreamDefinition = typeof StreamDefinition;
export const StreamDefinition = {
  name: "Stream",
  fullName: "test.Stream",
  methods: {
    biStream: {
      name: "BiStream",
      requestType: TestRequest,
      requestStream: true,
      responseType: StreamTestResponse,
      responseStream: true,
      options: {},
    },
    responseStream: {
      name: "ResponseStream",
      requestType: TestRequest,
      requestStream: false,
      responseType: StreamTestResponse,
      responseStream: true,
      options: {},
    },
    requestStream: {
      name: "RequestStream",
      requestType: TestRequest,
      requestStream: true,
      responseType: TestResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface StreamServiceImplementation<CallContextExt = {}> {
  biStream(
    request: AsyncIterable<TestRequest>,
    context: CallContext & CallContextExt
  ): ServerStreamingMethodResult<DeepPartial<StreamTestResponse>>;
  responseStream(
    request: TestRequest,
    context: CallContext & CallContextExt
  ): ServerStreamingMethodResult<DeepPartial<StreamTestResponse>>;
  requestStream(
    request: AsyncIterable<TestRequest>,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<TestResponse>>;
}

export interface StreamClient<CallOptionsExt = {}> {
  biStream(
    request: AsyncIterable<DeepPartial<TestRequest>>,
    options?: CallOptions & CallOptionsExt
  ): AsyncIterable<StreamTestResponse>;
  responseStream(
    request: DeepPartial<TestRequest>,
    options?: CallOptions & CallOptionsExt
  ): AsyncIterable<StreamTestResponse>;
  requestStream(
    request: AsyncIterable<DeepPartial<TestRequest>>,
    options?: CallOptions & CallOptionsExt
  ): Promise<TestResponse>;
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
      [key: string]: {
        options?: { [key: string]: any };
        methods?: { [key: string]: { [key: string]: any } };
      };
    };
    messages?: {
      [key: string]: ProtoMetaMessageOptions;
    };
    enums?: {
      [key: string]: {
        options?: { [key: string]: any };
        values?: { [key: string]: { [key: string]: any } };
      };
    };
  };
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto1.fromPartial({
    name: "test/test.proto",
    package: "test",
    dependency: [
      "google/protobuf/any.proto",
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/status.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        name: "TestRequest",
        field: [
          {
            name: "value",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "value",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "StreamTestResponse",
        field: [
          {
            name: "result",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "result",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "TestResponse",
        field: [
          {
            name: "result",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "result",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "status",
            number: 4,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.Status",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "status",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "TestEvent",
        field: [
          {
            name: "value",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "value",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "count",
            number: 2,
            label: 1,
            type: 5,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "count",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "TestBufferedData",
        field: [
          {
            name: "id",
            number: 1,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "id",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "meta",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.meta.Meta",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "meta",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "value",
            number: 3,
            label: 1,
            type: 9,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "value",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "count",
            number: 4,
            label: 1,
            type: 5,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "count",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "data",
            number: 5,
            label: 1,
            type: 11,
            typeName: ".google.protobuf.Any",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "data",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "TestBufferedDataList",
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".test.TestBufferedData",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "items",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "total_count",
            number: 2,
            label: 1,
            type: 13,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "totalCount",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "TestBufferedDataResponse",
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".test.TestBufferedData",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "payload",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "status",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.Status",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "status",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "TestBufferedDataListResponse",
        field: [
          {
            name: "items",
            number: 1,
            label: 3,
            type: 11,
            typeName: ".test.TestBufferedDataResponse",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "items",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "total_count",
            number: 2,
            label: 1,
            type: 13,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "totalCount",
            options: undefined,
            proto3Optional: false,
          },
          {
            name: "operation_status",
            number: 3,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.OperationStatus",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "operationStatus",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: "ExtendMe",
        field: [
          {
            name: "bar",
            number: 126,
            label: 1,
            type: 5,
            typeName: "",
            extendee: "",
            defaultValue: "",
            oneofIndex: 0,
            jsonName: "bar",
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
    ],
    enumType: [],
    service: [
      {
        name: "Test",
        method: [
          {
            name: "Test",
            inputType: ".test.TestRequest",
            outputType: ".test.TestResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Throw",
            inputType: ".test.TestRequest",
            outputType: ".test.TestResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "NotImplemented",
            inputType: ".test.TestRequest",
            outputType: ".test.TestResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "NotFound",
            inputType: ".test.TestRequest",
            outputType: ".test.TestResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Create",
            inputType: ".test.TestBufferedDataList",
            outputType: ".test.TestBufferedDataListResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: "Read",
            inputType: ".io.restorecommerce.resourcebase.ReadRequest",
            outputType: ".test.TestBufferedDataListResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: false,
          },
        ],
        options: undefined,
      },
      {
        name: "Stream",
        method: [
          {
            name: "BiStream",
            inputType: ".test.TestRequest",
            outputType: ".test.StreamTestResponse",
            options: undefined,
            clientStreaming: true,
            serverStreaming: true,
          },
          {
            name: "ResponseStream",
            inputType: ".test.TestRequest",
            outputType: ".test.StreamTestResponse",
            options: undefined,
            clientStreaming: false,
            serverStreaming: true,
          },
          {
            name: "RequestStream",
            inputType: ".test.TestRequest",
            outputType: ".test.TestResponse",
            options: undefined,
            clientStreaming: true,
            serverStreaming: false,
          },
        ],
        options: undefined,
      },
    ],
    extension: [],
    options: undefined,
    sourceCodeInfo: {
      location: [
        {
          path: [6, 1],
          span: [20, 0, 24, 1],
          leadingComments: "*\n Stream test service\n",
          trailingComments: "",
          leadingDetachedComments: [],
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".test.TestRequest": TestRequest,
    ".test.StreamTestResponse": StreamTestResponse,
    ".test.TestResponse": TestResponse,
    ".test.TestEvent": TestEvent,
    ".test.TestBufferedData": TestBufferedData,
    ".test.TestBufferedDataList": TestBufferedDataList,
    ".test.TestBufferedDataResponse": TestBufferedDataResponse,
    ".test.TestBufferedDataListResponse": TestBufferedDataListResponse,
    ".test.ExtendMe": ExtendMe,
  },
  dependencies: [
    protoMetadata1,
    protoMetadata2,
    protoMetadata3,
    protoMetadata4,
  ],
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export type ServerStreamingMethodResult<Response> = {
  [Symbol.asyncIterator](): AsyncIterator<Response, void>;
};
