/* eslint-disable */
import { Attribute } from '../../io/restorecommerce/attribute';
import { Writer, Reader } from 'protobufjs/minimal';


/**
 * *
 *  Subject of creating User
 */
export interface Subject {
  /**
   *  user id
   */
  id: string;
  /**
   *  target scope
   */
  scope: string;
  /**
   *   role_associations of user creating the user
   */
  roleAssociations: RoleAssociation[];
  /**
   *  HR scope of user creating the User
   */
  hierarchicalScopes: HierarchicalScope[];
  /**
   *  for unauthenticated context
   */
  unauthenticated: boolean;
  token: string;
}

export interface Tokens {
  /**
   *  token name
   */
  name: string;
  /**
   *  expiration date for token
   */
  expiresIn: number;
  /**
   *  token
   */
  token: string;
  /**
   *  identifier for role_association
   */
  scopes: string[];
  /**
   *  type of token eg: access_token, refresh_token
   */
  type: string;
  interactive: boolean;
}

export interface HierarchicalScope {
  /**
   *  root node
   */
  id: string;
  /**
   *  children nodes
   */
  children: HierarchicalScope[];
  /**
   *  role identifier associated with root node scope
   */
  role: string;
}

export interface RoleAssociation {
  /**
   *  role ID
   */
  role: string;
  /**
   *  useful attributes for RBAC/ABAC like organizational scope
   */
  attributes: Attribute[];
  /**
   *  identifier for role_association
   */
  id: string;
}

export interface HierarchicalScopesRequest {
  token: string;
}

export interface HierarchicalScopesResponse {
  subjectId: string;
  hierarchicalScopes: HierarchicalScope[];
  token: string;
}

const baseSubject: object = {
  id: "",
  scope: "",
  unauthenticated: false,
  token: "",
};

const baseTokens: object = {
  name: "",
  expiresIn: 0,
  token: "",
  scopes: "",
  type: "",
  interactive: false,
};

const baseHierarchicalScope: object = {
  id: "",
  role: "",
};

const baseRoleAssociation: object = {
  role: "",
  id: "",
};

const baseHierarchicalScopesRequest: object = {
  token: "",
};

const baseHierarchicalScopesResponse: object = {
  subjectId: "",
  token: "",
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

export const protobufPackage = 'io.restorecommerce.auth'

export const Subject = {
  encode(message: Subject, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.scope);
    for (const v of message.roleAssociations) {
      RoleAssociation.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.hierarchicalScopes) {
      HierarchicalScope.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(40).bool(message.unauthenticated);
    writer.uint32(50).string(message.token);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Subject {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSubject } as Subject;
    message.roleAssociations = [];
    message.hierarchicalScopes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.scope = reader.string();
          break;
        case 3:
          message.roleAssociations.push(RoleAssociation.decode(reader, reader.uint32()));
          break;
        case 4:
          message.hierarchicalScopes.push(HierarchicalScope.decode(reader, reader.uint32()));
          break;
        case 5:
          message.unauthenticated = reader.bool();
          break;
        case 6:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Subject {
    const message = { ...baseSubject } as Subject;
    message.roleAssociations = [];
    message.hierarchicalScopes = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = String(object.scope);
    } else {
      message.scope = "";
    }
    if (object.roleAssociations !== undefined && object.roleAssociations !== null) {
      for (const e of object.roleAssociations) {
        message.roleAssociations.push(RoleAssociation.fromJSON(e));
      }
    }
    if (object.hierarchicalScopes !== undefined && object.hierarchicalScopes !== null) {
      for (const e of object.hierarchicalScopes) {
        message.hierarchicalScopes.push(HierarchicalScope.fromJSON(e));
      }
    }
    if (object.unauthenticated !== undefined && object.unauthenticated !== null) {
      message.unauthenticated = Boolean(object.unauthenticated);
    } else {
      message.unauthenticated = false;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Subject>): Subject {
    const message = { ...baseSubject } as Subject;
    message.roleAssociations = [];
    message.hierarchicalScopes = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = object.scope;
    } else {
      message.scope = "";
    }
    if (object.roleAssociations !== undefined && object.roleAssociations !== null) {
      for (const e of object.roleAssociations) {
        message.roleAssociations.push(RoleAssociation.fromPartial(e));
      }
    }
    if (object.hierarchicalScopes !== undefined && object.hierarchicalScopes !== null) {
      for (const e of object.hierarchicalScopes) {
        message.hierarchicalScopes.push(HierarchicalScope.fromPartial(e));
      }
    }
    if (object.unauthenticated !== undefined && object.unauthenticated !== null) {
      message.unauthenticated = object.unauthenticated;
    } else {
      message.unauthenticated = false;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    return message;
  },
  toJSON(message: Subject): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.scope !== undefined && (obj.scope = message.scope);
    if (message.roleAssociations) {
      obj.roleAssociations = message.roleAssociations.map(e => e ? RoleAssociation.toJSON(e) : undefined);
    } else {
      obj.roleAssociations = [];
    }
    if (message.hierarchicalScopes) {
      obj.hierarchicalScopes = message.hierarchicalScopes.map(e => e ? HierarchicalScope.toJSON(e) : undefined);
    } else {
      obj.hierarchicalScopes = [];
    }
    message.unauthenticated !== undefined && (obj.unauthenticated = message.unauthenticated);
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },
};

export const Tokens = {
  encode(message: Tokens, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.name);
    writer.uint32(17).double(message.expiresIn);
    writer.uint32(26).string(message.token);
    for (const v of message.scopes) {
      writer.uint32(34).string(v!);
    }
    writer.uint32(42).string(message.type);
    writer.uint32(48).bool(message.interactive);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Tokens {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTokens } as Tokens;
    message.scopes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.expiresIn = reader.double();
          break;
        case 3:
          message.token = reader.string();
          break;
        case 4:
          message.scopes.push(reader.string());
          break;
        case 5:
          message.type = reader.string();
          break;
        case 6:
          message.interactive = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Tokens {
    const message = { ...baseTokens } as Tokens;
    message.scopes = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.expiresIn !== undefined && object.expiresIn !== null) {
      message.expiresIn = Number(object.expiresIn);
    } else {
      message.expiresIn = 0;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    if (object.scopes !== undefined && object.scopes !== null) {
      for (const e of object.scopes) {
        message.scopes.push(String(e));
      }
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.interactive !== undefined && object.interactive !== null) {
      message.interactive = Boolean(object.interactive);
    } else {
      message.interactive = false;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Tokens>): Tokens {
    const message = { ...baseTokens } as Tokens;
    message.scopes = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.expiresIn !== undefined && object.expiresIn !== null) {
      message.expiresIn = object.expiresIn;
    } else {
      message.expiresIn = 0;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.scopes !== undefined && object.scopes !== null) {
      for (const e of object.scopes) {
        message.scopes.push(e);
      }
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.interactive !== undefined && object.interactive !== null) {
      message.interactive = object.interactive;
    } else {
      message.interactive = false;
    }
    return message;
  },
  toJSON(message: Tokens): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.expiresIn !== undefined && (obj.expiresIn = message.expiresIn);
    message.token !== undefined && (obj.token = message.token);
    if (message.scopes) {
      obj.scopes = message.scopes.map(e => e);
    } else {
      obj.scopes = [];
    }
    message.type !== undefined && (obj.type = message.type);
    message.interactive !== undefined && (obj.interactive = message.interactive);
    return obj;
  },
};

export const HierarchicalScope = {
  encode(message: HierarchicalScope, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    for (const v of message.children) {
      HierarchicalScope.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.role);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): HierarchicalScope {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHierarchicalScope } as HierarchicalScope;
    message.children = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.children.push(HierarchicalScope.decode(reader, reader.uint32()));
          break;
        case 3:
          message.role = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HierarchicalScope {
    const message = { ...baseHierarchicalScope } as HierarchicalScope;
    message.children = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.children !== undefined && object.children !== null) {
      for (const e of object.children) {
        message.children.push(HierarchicalScope.fromJSON(e));
      }
    }
    if (object.role !== undefined && object.role !== null) {
      message.role = String(object.role);
    } else {
      message.role = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<HierarchicalScope>): HierarchicalScope {
    const message = { ...baseHierarchicalScope } as HierarchicalScope;
    message.children = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.children !== undefined && object.children !== null) {
      for (const e of object.children) {
        message.children.push(HierarchicalScope.fromPartial(e));
      }
    }
    if (object.role !== undefined && object.role !== null) {
      message.role = object.role;
    } else {
      message.role = "";
    }
    return message;
  },
  toJSON(message: HierarchicalScope): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.children) {
      obj.children = message.children.map(e => e ? HierarchicalScope.toJSON(e) : undefined);
    } else {
      obj.children = [];
    }
    message.role !== undefined && (obj.role = message.role);
    return obj;
  },
};

export const RoleAssociation = {
  encode(message: RoleAssociation, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.role);
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.id);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): RoleAssociation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRoleAssociation } as RoleAssociation;
    message.attributes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.role = reader.string();
          break;
        case 2:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        case 3:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RoleAssociation {
    const message = { ...baseRoleAssociation } as RoleAssociation;
    message.attributes = [];
    if (object.role !== undefined && object.role !== null) {
      message.role = String(object.role);
    } else {
      message.role = "";
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      for (const e of object.attributes) {
        message.attributes.push(Attribute.fromJSON(e));
      }
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<RoleAssociation>): RoleAssociation {
    const message = { ...baseRoleAssociation } as RoleAssociation;
    message.attributes = [];
    if (object.role !== undefined && object.role !== null) {
      message.role = object.role;
    } else {
      message.role = "";
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      for (const e of object.attributes) {
        message.attributes.push(Attribute.fromPartial(e));
      }
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
  toJSON(message: RoleAssociation): unknown {
    const obj: any = {};
    message.role !== undefined && (obj.role = message.role);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
};

export const HierarchicalScopesRequest = {
  encode(message: HierarchicalScopesRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.token);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): HierarchicalScopesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHierarchicalScopesRequest } as HierarchicalScopesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HierarchicalScopesRequest {
    const message = { ...baseHierarchicalScopesRequest } as HierarchicalScopesRequest;
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<HierarchicalScopesRequest>): HierarchicalScopesRequest {
    const message = { ...baseHierarchicalScopesRequest } as HierarchicalScopesRequest;
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    return message;
  },
  toJSON(message: HierarchicalScopesRequest): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },
};

export const HierarchicalScopesResponse = {
  encode(message: HierarchicalScopesResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.subjectId);
    for (const v of message.hierarchicalScopes) {
      HierarchicalScope.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.token);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): HierarchicalScopesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHierarchicalScopesResponse } as HierarchicalScopesResponse;
    message.hierarchicalScopes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subjectId = reader.string();
          break;
        case 2:
          message.hierarchicalScopes.push(HierarchicalScope.decode(reader, reader.uint32()));
          break;
        case 3:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HierarchicalScopesResponse {
    const message = { ...baseHierarchicalScopesResponse } as HierarchicalScopesResponse;
    message.hierarchicalScopes = [];
    if (object.subjectId !== undefined && object.subjectId !== null) {
      message.subjectId = String(object.subjectId);
    } else {
      message.subjectId = "";
    }
    if (object.hierarchicalScopes !== undefined && object.hierarchicalScopes !== null) {
      for (const e of object.hierarchicalScopes) {
        message.hierarchicalScopes.push(HierarchicalScope.fromJSON(e));
      }
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<HierarchicalScopesResponse>): HierarchicalScopesResponse {
    const message = { ...baseHierarchicalScopesResponse } as HierarchicalScopesResponse;
    message.hierarchicalScopes = [];
    if (object.subjectId !== undefined && object.subjectId !== null) {
      message.subjectId = object.subjectId;
    } else {
      message.subjectId = "";
    }
    if (object.hierarchicalScopes !== undefined && object.hierarchicalScopes !== null) {
      for (const e of object.hierarchicalScopes) {
        message.hierarchicalScopes.push(HierarchicalScope.fromPartial(e));
      }
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    return message;
  },
  toJSON(message: HierarchicalScopesResponse): unknown {
    const obj: any = {};
    message.subjectId !== undefined && (obj.subjectId = message.subjectId);
    if (message.hierarchicalScopes) {
      obj.hierarchicalScopes = message.hierarchicalScopes.map(e => e ? HierarchicalScope.toJSON(e) : undefined);
    } else {
      obj.hierarchicalScopes = [];
    }
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },
};

export const metaSubject: { [key in keyof Required<Subject>]: MetaBase | string } = {
  id: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  scope: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  roleAssociations: {kind:'array', type:{kind:'object', type:'.io.restorecommerce.auth.RoleAssociation', name:'RoleAssociation'} as MetaMessage} as MetaArray,
  hierarchicalScopes: {kind:'array', type:{kind:'object', type:'.io.restorecommerce.auth.HierarchicalScope', name:'HierarchicalScope'} as MetaMessage} as MetaArray,
  unauthenticated: {kind:'builtin', type:'boolean', original:'bool'} as MetaPrimitive,
  token: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
}
export const metaTokens: { [key in keyof Required<Tokens>]: MetaBase | string } = {
  name: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  expiresIn: {kind:'builtin', type:'number', original:'double'} as MetaPrimitive,
  token: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  scopes: {kind:'array', type:{kind:'builtin', type:'string', original:'string'} as MetaPrimitive} as MetaArray,
  type: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  interactive: {kind:'builtin', type:'boolean', original:'bool'} as MetaPrimitive,
}
export const metaHierarchicalScope: { [key in keyof Required<HierarchicalScope>]: MetaBase | string } = {
  id: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  children: {kind:'array', type:{kind:'object', type:'.io.restorecommerce.auth.HierarchicalScope', name:'HierarchicalScope'} as MetaMessage} as MetaArray,
  role: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
}
export const metaRoleAssociation: { [key in keyof Required<RoleAssociation>]: MetaBase | string } = {
  role: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  attributes: {kind:'array', type:{kind:'object', type:'.io.restorecommerce.attribute.Attribute', name:'Attribute'} as MetaMessage} as MetaArray,
  id: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
}
export const metaHierarchicalScopesRequest: { [key in keyof Required<HierarchicalScopesRequest>]: MetaBase | string } = {
  token: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
}
export const metaHierarchicalScopesResponse: { [key in keyof Required<HierarchicalScopesResponse>]: MetaBase | string } = {
  subjectId: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
  hierarchicalScopes: {kind:'array', type:{kind:'object', type:'.io.restorecommerce.auth.HierarchicalScope', name:'HierarchicalScope'} as MetaMessage} as MetaArray,
  token: {kind:'builtin', type:'string', original:'string'} as MetaPrimitive,
}
export const metadata: { [key: string]: ['service', string, any, { [key: string]: MetaService<any, any> }] | ['enum', string, any, any] | ['message', string, any, { [key: string]: MetaBase | string }] } = {
  Subject: ['message', '.io.restorecommerce.auth.Subject', Subject, metaSubject],
  Tokens: ['message', '.io.restorecommerce.auth.Tokens', Tokens, metaTokens],
  HierarchicalScope: ['message', '.io.restorecommerce.auth.HierarchicalScope', HierarchicalScope, metaHierarchicalScope],
  RoleAssociation: ['message', '.io.restorecommerce.auth.RoleAssociation', RoleAssociation, metaRoleAssociation],
  HierarchicalScopesRequest: ['message', '.io.restorecommerce.auth.HierarchicalScopesRequest', HierarchicalScopesRequest, metaHierarchicalScopesRequest],
  HierarchicalScopesResponse: ['message', '.io.restorecommerce.auth.HierarchicalScopesResponse', HierarchicalScopesResponse, metaHierarchicalScopesResponse],
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