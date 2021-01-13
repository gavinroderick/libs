/* eslint-disable */
import { Meta } from '../../io/restorecommerce/meta';
import { Target, Effect, effectFromJSON, effectToJSON } from '../../io/restorecommerce/rule';
import { Subject } from '../../io/restorecommerce/auth';
import { PolicyRQ } from '../../io/restorecommerce/policy';
import { ReadRequest, DeleteRequest } from '../../io/restorecommerce/resource_base';
import { Empty } from '../../google/protobuf/empty';
import { Writer, Reader } from 'protobufjs/minimal';


export interface PolicySet {
  id: string;
  meta?: Meta;
  name: string;
  description: string;
  target?: Target;
  combiningAlgorithm: string;
  /**
   *  policy IDs
   */
  policies: string[];
}

export interface PolicySetList {
  items: PolicySet[];
  totalCount: number;
  subject?: Subject;
}

export interface PolicySetRQ {
  id: string;
  target?: Target;
  combiningAlgorithm: string;
  policies: PolicyRQ[];
  effect: Effect;
}

const basePolicySet: object = {
  id: "",
  name: "",
  description: "",
  combiningAlgorithm: "",
  policies: "",
};

const basePolicySetList: object = {
  totalCount: 0,
};

const basePolicySetRQ: object = {
  id: "",
  combiningAlgorithm: "",
  effect: 0,
};

export interface Service {

  Read(request: ReadRequest): Promise<PolicySetList>;

  Create(request: PolicySetList): Promise<PolicySetList>;

  Delete(request: DeleteRequest): Promise<Empty>;

  Update(request: PolicySetList): Promise<PolicySetList>;

  Upsert(request: PolicySetList): Promise<PolicySetList>;

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

export const protobufPackage = 'io.restorecommerce.policy_set'

export const PolicySet = {
  encode(message: PolicySet, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.meta !== undefined && message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.name);
    writer.uint32(34).string(message.description);
    if (message.target !== undefined && message.target !== undefined) {
      Target.encode(message.target, writer.uint32(42).fork()).ldelim();
    }
    writer.uint32(50).string(message.combiningAlgorithm);
    for (const v of message.policies) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PolicySet {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePolicySet } as PolicySet;
    message.policies = [];
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
          message.description = reader.string();
          break;
        case 5:
          message.target = Target.decode(reader, reader.uint32());
          break;
        case 6:
          message.combiningAlgorithm = reader.string();
          break;
        case 7:
          message.policies.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PolicySet {
    const message = { ...basePolicySet } as PolicySet;
    message.policies = [];
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
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.target !== undefined && object.target !== null) {
      message.target = Target.fromJSON(object.target);
    } else {
      message.target = undefined;
    }
    if (object.combiningAlgorithm !== undefined && object.combiningAlgorithm !== null) {
      message.combiningAlgorithm = String(object.combiningAlgorithm);
    } else {
      message.combiningAlgorithm = "";
    }
    if (object.policies !== undefined && object.policies !== null) {
      for (const e of object.policies) {
        message.policies.push(String(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PolicySet>): PolicySet {
    const message = { ...basePolicySet } as PolicySet;
    message.policies = [];
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
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.target !== undefined && object.target !== null) {
      message.target = Target.fromPartial(object.target);
    } else {
      message.target = undefined;
    }
    if (object.combiningAlgorithm !== undefined && object.combiningAlgorithm !== null) {
      message.combiningAlgorithm = object.combiningAlgorithm;
    } else {
      message.combiningAlgorithm = "";
    }
    if (object.policies !== undefined && object.policies !== null) {
      for (const e of object.policies) {
        message.policies.push(e);
      }
    }
    return message;
  },
  toJSON(message: PolicySet): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.target !== undefined && (obj.target = message.target ? Target.toJSON(message.target) : undefined);
    message.combiningAlgorithm !== undefined && (obj.combiningAlgorithm = message.combiningAlgorithm);
    if (message.policies) {
      obj.policies = message.policies.map(e => e);
    } else {
      obj.policies = [];
    }
    return obj;
  },
};

export const PolicySetList = {
  encode(message: PolicySetList, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      PolicySet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(16).uint32(message.totalCount);
    if (message.subject !== undefined && message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PolicySetList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePolicySetList } as PolicySetList;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(PolicySet.decode(reader, reader.uint32()));
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
  fromJSON(object: any): PolicySetList {
    const message = { ...basePolicySetList } as PolicySetList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(PolicySet.fromJSON(e));
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
  fromPartial(object: DeepPartial<PolicySetList>): PolicySetList {
    const message = { ...basePolicySetList } as PolicySetList;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(PolicySet.fromPartial(e));
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
  toJSON(message: PolicySetList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? PolicySet.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },
};

export const PolicySetRQ = {
  encode(message: PolicySetRQ, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    if (message.target !== undefined && message.target !== undefined) {
      Target.encode(message.target, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.combiningAlgorithm);
    for (const v of message.policies) {
      PolicyRQ.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(40).int32(message.effect);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): PolicySetRQ {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePolicySetRQ } as PolicySetRQ;
    message.policies = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.target = Target.decode(reader, reader.uint32());
          break;
        case 3:
          message.combiningAlgorithm = reader.string();
          break;
        case 4:
          message.policies.push(PolicyRQ.decode(reader, reader.uint32()));
          break;
        case 5:
          message.effect = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PolicySetRQ {
    const message = { ...basePolicySetRQ } as PolicySetRQ;
    message.policies = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.target !== undefined && object.target !== null) {
      message.target = Target.fromJSON(object.target);
    } else {
      message.target = undefined;
    }
    if (object.combiningAlgorithm !== undefined && object.combiningAlgorithm !== null) {
      message.combiningAlgorithm = String(object.combiningAlgorithm);
    } else {
      message.combiningAlgorithm = "";
    }
    if (object.policies !== undefined && object.policies !== null) {
      for (const e of object.policies) {
        message.policies.push(PolicyRQ.fromJSON(e));
      }
    }
    if (object.effect !== undefined && object.effect !== null) {
      message.effect = effectFromJSON(object.effect);
    } else {
      message.effect = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<PolicySetRQ>): PolicySetRQ {
    const message = { ...basePolicySetRQ } as PolicySetRQ;
    message.policies = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.target !== undefined && object.target !== null) {
      message.target = Target.fromPartial(object.target);
    } else {
      message.target = undefined;
    }
    if (object.combiningAlgorithm !== undefined && object.combiningAlgorithm !== null) {
      message.combiningAlgorithm = object.combiningAlgorithm;
    } else {
      message.combiningAlgorithm = "";
    }
    if (object.policies !== undefined && object.policies !== null) {
      for (const e of object.policies) {
        message.policies.push(PolicyRQ.fromPartial(e));
      }
    }
    if (object.effect !== undefined && object.effect !== null) {
      message.effect = object.effect;
    } else {
      message.effect = 0;
    }
    return message;
  },
  toJSON(message: PolicySetRQ): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.target !== undefined && (obj.target = message.target ? Target.toJSON(message.target) : undefined);
    message.combiningAlgorithm !== undefined && (obj.combiningAlgorithm = message.combiningAlgorithm);
    if (message.policies) {
      obj.policies = message.policies.map(e => e ? PolicyRQ.toJSON(e) : undefined);
    } else {
      obj.policies = [];
    }
    message.effect !== undefined && (obj.effect = effectToJSON(message.effect));
    return obj;
  },
};

export const metaPolicySet: { [key in keyof Required<PolicySet>]: MetaBase | string } = {
  id: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  meta: {kind:'object', type:'.io.restorecommerce.meta.Meta', name:'Meta'} as MetaMessage,
  name: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  description: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  target: {kind:'object', type:'.io.restorecommerce.rule.Target', name:'Target'} as MetaMessage,
  combiningAlgorithm: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  policies: {kind:'array', type:{kind:'builtin', type:'string', original:'string'} as MetaPrimitive} as MetaArray,
}
export const metaPolicySetList: { [key in keyof Required<PolicySetList>]: MetaBase | string } = {
  items: {kind:'array', type:{kind:'object', type:'.io.restorecommerce.policy_set.PolicySet', name:'PolicySet'} as MetaMessage} as MetaArray,
  totalCount: {kind:'builtin', type:'number', original:'uint32'} as MetaPrimitive,
  subject: {kind:'object', type:'.io.restorecommerce.auth.Subject', name:'Subject'} as MetaMessage,
}
export const metaPolicySetRQ: { [key in keyof Required<PolicySetRQ>]: MetaBase | string } = {
  id: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  target: {kind:'object', type:'.io.restorecommerce.rule.Target', name:'Target'} as MetaMessage,
  combiningAlgorithm: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  policies: {kind:'array', type:{kind:'object', type:'.io.restorecommerce.policy.PolicyRQ', name:'PolicyRQ'} as MetaMessage} as MetaArray,
  effect: {kind:'object', type:'.io.restorecommerce.rule.Effect', name:'Effect'} as MetaMessage,
}
export const metaService: { [key in keyof Service]: MetaService<any, any> } = {
  Read: {request: {kind:'object', type:'.io.restorecommerce.resourcebase.ReadRequest', name:'ReadRequest'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.policy_set.PolicySetList', name:'PolicySetList'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: ReadRequest.encode, decodeResponse: PolicySetList.decode} as MetaService<ReadRequest, PolicySetList>,
  Create: {request: {kind:'object', type:'.io.restorecommerce.policy_set.PolicySetList', name:'PolicySetList'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.policy_set.PolicySetList', name:'PolicySetList'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: PolicySetList.encode, decodeResponse: PolicySetList.decode} as MetaService<PolicySetList, PolicySetList>,
  Delete: {request: {kind:'object', type:'.io.restorecommerce.resourcebase.DeleteRequest', name:'DeleteRequest'} as MetaMessage, response: {kind:'object', type:'.google.protobuf.Empty', name:'Empty'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: DeleteRequest.encode, decodeResponse: Empty.decode} as MetaService<DeleteRequest, Empty>,
  Update: {request: {kind:'object', type:'.io.restorecommerce.policy_set.PolicySetList', name:'PolicySetList'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.policy_set.PolicySetList', name:'PolicySetList'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: PolicySetList.encode, decodeResponse: PolicySetList.decode} as MetaService<PolicySetList, PolicySetList>,
  Upsert: {request: {kind:'object', type:'.io.restorecommerce.policy_set.PolicySetList', name:'PolicySetList'} as MetaMessage, response: {kind:'object', type:'.io.restorecommerce.policy_set.PolicySetList', name:'PolicySetList'} as MetaMessage, clientStreaming: false, serverStreaming: false, encodeRequest: PolicySetList.encode, decodeResponse: PolicySetList.decode} as MetaService<PolicySetList, PolicySetList>,
}
export const metadata: { [key: string]: ['service', string, any, { [key: string]: MetaService<any, any> }] | ['enum', string, any, any] | ['message', string, any, { [key: string]: MetaBase | string }] } = {
  PolicySet: ['message', '.io.restorecommerce.policy_set.PolicySet', PolicySet, metaPolicySet],
  PolicySetList: ['message', '.io.restorecommerce.policy_set.PolicySetList', PolicySetList, metaPolicySetList],
  PolicySetRQ: ['message', '.io.restorecommerce.policy_set.PolicySetRQ', PolicySetRQ, metaPolicySetRQ],
  Service: ['service', '.io.restorecommerce.policy_set.Service', undefined, metaService],
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