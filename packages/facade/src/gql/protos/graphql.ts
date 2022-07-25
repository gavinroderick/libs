import {
  GraphQLInputField,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLOutputType,
  GraphQLResolveInfo,
  GraphQLSchema, ThunkObjMap
} from 'graphql';
import {
  GraphQLEnumType,
  GraphQLFieldConfig,
  GraphQLFieldConfigMap,
  GraphQLInputObjectType, GraphQLInputType, GraphQLScalarType,
} from 'graphql/type/definition';
import { authSubjectType, ProtoMetadata, ServiceConfig, SubSpaceServiceConfig } from './types';
import { getTyping } from './registry';
import { capitalizeProtoName, getKeys, decodeBufferFields, convertEnumToInt } from './utils';
import { Readable } from 'stream';
import {
  DescriptorProto,
  MethodDescriptorProto,
  ServiceDescriptorProto
} from 'ts-proto-descriptors';
import * as stream from 'stream';
import * as _ from 'lodash';
import { GrpcClientConfig } from '@restorecommerce/grpc-client';
import { Resolver } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/options';
import { ReadRequest } from '@restorecommerce/rc-grpc-clients';
import {
  Filter_Operation,
  Filter_ValueType, FilterOp_Operator
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/resource_base';
import flat from 'array.prototype.flat';

const typeCache = new Map<string, GraphQLObjectType>();
const Mutate = ['Create', 'Update', 'Upsert'];
const inputMethodType = new Map<string, string>();

export const getGQLSchema = <TSource, TContext>
(method: MethodDescriptorProto): GraphQLFieldConfig<TSource, TContext> => {
  const fields: any = {
    // operationStatus: {
    //   type: new GraphQLNonNull(OperationStatusType),
    // },
  }

  const responseTyping = getTyping(method.outputType!);
  if (!responseTyping) {
    throw Error('Method doesn\'t have registered typings: ' + method.outputType!);
  }

  if (method.outputType! !== '.google.protobuf.Empty') {
    fields['details'] = {
      type: responseTyping.output,
    }
  }

  const outName = 'Proto' + capitalizeProtoName(method.outputType!);

  let out = typeCache.get(outName);
  if (!out) {
    out = new GraphQLObjectType({
      name: outName,
      fields,
    });
    typeCache.set(outName, out);
  }

  const typing = getTyping(method.inputType!);
  if (!typing) {
    throw Error('Method doesn\'t have registered typings: ' + method.inputType!);
  }

  return {
    type: out,
    args: method.inputType! === '.google.protobuf.Empty' ? undefined : {
      input: {
        type: new GraphQLNonNull(typing.input!)
      }
    }
  }
}

export const getGQLSchemas = <TSource, TContext>(service: ServiceDescriptorProto): GraphQLFieldConfigMap<TSource, TContext> => {
  return service.method?.reduce((obj, method) => {
    obj[method.name!] = getGQLSchema(method);
    return obj;
  }, {} as any);
}

export const preprocessGQLInput = async (data: any, model: GraphQLInputObjectType | GraphQLEnumType | GraphQLInputField | GraphQLInputType): Promise<any> => {
  if (model instanceof GraphQLEnumType) {
    return data;
  }

  if (model instanceof GraphQLInputObjectType) {
    if (model.name === 'IGoogleProtobufAny') {
      // TODO Use encoded once resource base supports it
      // const typing = getTyping(data.typeUrl);
      // if (!typing) {
      //   throw Error(`GoogleProtobufAny could not find input type: ${data.typeUrl}`);
      // }
      //
      // const encoded = typing.processor.encode(typing.processor.fromPartial(data.value)).finish();

      const encoded = Buffer.from(JSON.stringify(data.value));

      return {
        ...data,
        value: encoded
      };
    } else {
      const fields = model.getFields();
      for (let key of Object.keys(fields)) {
        if (data && key in data) {
          data[key] = await preprocessGQLInput(data[key], fields[key].type);
        }
      }
    }
  }

  if (model instanceof GraphQLScalarType) {
    if (model.name === 'IDateTime') {
      return new Date(data);
    }
  }

  if (model instanceof GraphQLNonNull) {
    return await preprocessGQLInput(data, model.ofType);
  }

  if (model instanceof GraphQLList) {
    for (let i = 0; i < data.length; i++) {
      data[i] = await preprocessGQLInput(data[i], model.ofType);
    }
  }

  if (model instanceof GraphQLScalarType) {
    switch (model.name) {
      case 'Upload':
        if (typeof data !== 'object') {
          return Buffer.from(data.toString(), 'utf8');
        }

        let fileData = await data;
        const upload = await fileData.promise;
        const stream: Readable = upload.createReadStream();

        const chunks: any[] = [];
        for await (let chunk of stream) {
          chunks.push(chunk)
        }

        return Buffer.concat(chunks);
    }
  }

  return data;
}

export const postProcessGQLValue = (data: any, model: GraphQLOutputType): any => {
  if (model instanceof GraphQLEnumType) {
    return data;
  }

  if (model instanceof GraphQLObjectType) {
    if (model.name === 'GoogleProtobufAny' && data?.value) {
      // TODO Use encoded once resource base supports it

      const decoded = JSON.parse((data.value as Buffer).toString());

      return {
        ...data,
        value: decoded
      };
    } else {
      const fields = model.getFields();
      for (let key of Object.keys(fields)) {
        if (data && key in data) {
          data[key] = postProcessGQLValue(data[key], fields[key].type);
        }
      }
    }
  }

  if (model instanceof GraphQLNonNull) {
    return postProcessGQLValue(data, model.ofType);
  }

  if (model instanceof GraphQLList) {
    for (let i = 0; i < data.length; i++) {
      data[i] = postProcessGQLValue(data[i], model.ofType);
    }
  }

  return data;
}

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


type ServiceClient<Context extends Pick<Context, Key>, Key extends keyof Context, T extends Record<string, any>> = {
  [V in Key]: {
    client: T
  };
};

export const getGQLResolverFunctions =
  <T extends Record<string, any>, CTX extends ServiceClient<CTX, keyof CTX, T>, SRV = any, R = ResolverFn<any, any, ServiceClient<CTX, keyof CTX, T>, any>, B extends keyof T = any, NS extends keyof CTX = any>
  (service: ServiceDescriptorProto, key: NS, serviceKey: B, cfg: ServiceConfig): { [key in keyof SRV]: R } => {
    if (!service.method) {
      return {} as { [key in keyof SRV]: R };
    }

    return service.method.reduce((obj, method) => {

      if ((cfg as any)[serviceKey]?.methods?.blacklist) {
        const blacklistMethods = (cfg as any)[serviceKey]?.methods?.blacklist;
        if (blacklistMethods.includes(method.name)) {
          return {} as { [key in keyof SRV]: R };
        }
      }

      const typing = getTyping(method.inputType!)!;
      const outputTyping = getTyping(method.outputType!)!;

      if (!typing) {
        throw Error(`Method '${method.name}' could not find input type: ${method.inputType}`);
      }

      if (!outputTyping) {
        throw Error(`Method '${method.name}' could not find output type: ${method.outputType}`);
      }

      if (!('fromPartial' in typing.processor)) {
        throw Error(`Method ${method.name} input type '${method.inputType}' does not contain 'fromPartial' function`);
      }

      let subjectField: null | string = null;
      if (typing) {
        for (let field of (typing.meta as DescriptorProto).field) {
          if (field.typeName === authSubjectType) {
            subjectField = field.name;
            break;
          }
        }
      }

      let methodName = method.name;
      if (Mutate.indexOf(method.name) > -1) {
        methodName = 'Mutate';
      }

      if (methodName in obj) {
        return obj;
      }

      (obj as any)[methodName] = async (args: any, context: ServiceClient<CTX, keyof CTX, T>) => {
        const client = context[key].client;
        const service = client[serviceKey];
        try {
          const converted = await preprocessGQLInput(args.input, typing.input);
          const scope = args?.input?.scope;

          let req = typing.processor.fromPartial(converted);

          // convert enum strings to integers
          req = convertEnumToInt(typing, req);
          if (subjectField !== null) {
            req.subject = getTyping(authSubjectType)!.processor.fromPartial({});

            const authToken = (context as any).request!.req.headers['authorization'];
            if (authToken && authToken.startsWith('Bearer ')) {
              req.subject.token = authToken.split(' ')[1];
            }
            if (scope) {
              req.subject.scope = scope;
            }
          }

          let realMethod = method.name;
          if (Mutate.indexOf(method.name) > -1) {
            const mode = args?.input?.mode;
            if (!mode) {
              throw new Error('Please specify mode');
            }
            if (mode === 'CREATE') {
              realMethod = 'Create';
            } else if (mode === 'UPDATE') {
              realMethod = 'Update';
            } else if (mode === 'UPSERT') {
              realMethod = 'Upsert';
            }
          }

          const methodFunc = service[camelCase(realMethod)] || service[realMethod];
          const rawResult = await methodFunc(req);
          const result = postProcessGQLValue(rawResult, outputTyping.output);

          const grpcClientConfig = cfg.client;
          const bufferFields = getKeys((grpcClientConfig as any)?.bufferFields);
          if (result instanceof stream.Readable) {
            let operationStatus = {code: 0, message: ''};
            let aggregatedResponse: any = await new Promise((resolve, reject) => {
              let response: any = {};
              let combinedChunks: any = {};
              result.on('data', (chunk) => {
                const chunkObj = _.cloneDeep(chunk);
                if (!combinedChunks) {
                  combinedChunks = chunk;
                } else {
                  Object.assign(combinedChunks, chunk);
                }
                const existingBufferFields = _.intersection(Object.keys(chunk), bufferFields);
                for (let bufferField of existingBufferFields) {
                  if (chunkObj[bufferField] && chunkObj[bufferField].value) {
                    if (!response[bufferField]) {
                      response[bufferField] = { value: [] };
                    }
                    if (response[bufferField] && response[bufferField].value && !_.isArray(response[bufferField].value)) {
                      response[bufferField].value = [];
                    }
                    let data = JSON.parse(chunkObj[bufferField].value.toString());
                    if (_.isArray(data)) {
                      for (let dataObj of data) {
                        response[bufferField].value.push(dataObj);
                      }
                    } else {
                      response[bufferField].value.push(data);
                    }
                  }
                }
              });
              result.on('error', (err) => {
                console.error(err);
                operationStatus.code = (err as any).code ? (err as any).code : 500;
                operationStatus.message = err.message;
              });
              result.on('end', () => {
                if (_.isEmpty(operationStatus.message)) {
                  operationStatus.code = 200;
                  operationStatus.message = 'success';
                }
                if (!_.isEmpty(response)) {
                  resolve(response);
                } else if (!_.isEmpty(combinedChunks)) {
                  resolve(combinedChunks);
                }
              });
            });
            return {details: aggregatedResponse, operationStatus};
          }

          if ('items' in result) {
            let items = decodeBufferFields(result.items, bufferFields);
            return {
              details: {
                items: items, // items includes both payload and individual status
                operationStatus: result.operationStatus // overall status
              },
            };
          } else {
            return {
              details: decodeBufferFields([result], bufferFields)[0]
            }
          }
        } catch (error: any) {
          console.error(error);
          return {
            details: {
              items: [],
              operationStatus: {
                code: error.code,
                message: error.message
              }
            }
          }
        }
      };
      return obj;
    }, {} as { [key in keyof SRV]: R });
  }

type ResolverBaseOrSub =
  ResolverFn<any, any, ServiceClient<any, any, any>, any>
  | Map<string, ResolverFn<any, any, ServiceClient<any, any, any>, any>>;
const namespaceResolverRegistry = new Map<string, Map<boolean, Map<string, ResolverBaseOrSub>>>();

export const registerResolverFunction = <T extends Record<string, any>, CTX extends ServiceClient<CTX, keyof CTX, T>>
(namespace: string, name: string, func: ResolverFn<any, any, ServiceClient<CTX, keyof CTX, T>, any>,
 mutation: boolean = false, subspace: string | undefined = undefined, service?: ServiceDescriptorProto) => {
  if (!namespaceResolverRegistry.has(namespace)) {
    namespaceResolverRegistry.set(namespace, new Map());
  }

  if (!namespaceResolverRegistry.get(namespace)!.has(mutation)) {
    namespaceResolverRegistry.get(namespace)!.set(mutation, new Map());
  }

  let space = namespaceResolverRegistry.get(namespace)!.get(mutation)!;
  if (subspace) {
    if (!space.has(subspace)) {
      space.set(subspace, new Map());
    }
    space = space.get(subspace)! as Map<string, ResolverFn<any, any, ServiceClient<any, any, any>, any>>;
  }

  if (space.has(name)) {
    if (subspace) {
      throw new Error(`Namespace "${namespace}"."${subspace}" already contains a function: ${name} (mutation: ${mutation})`);
    } else {
      throw new Error(`Namespace "${namespace}" already contains a function: ${name} (mutation: ${mutation})`);
    }
  }
  if (service) {
    const key = namespace?.toLocaleLowerCase() + '.' + subspace?.toLocaleLowerCase() + '.' + name?.toLocaleLowerCase();
    const value = service.method.find((m) => m.name === name);
    if (key && value?.inputType) {
      inputMethodType.set(key, value.inputType);
    }
  }
  space.set(name, func);
}

export const generateResolver = (...namespaces: string[]) => {
  const queryResolvers: any = {};
  const mutationResolvers: any = {};

  namespaces.forEach(ns => {
    if (!namespaceResolverRegistry.has(ns)) {
      throw new Error(`Namespace "${ns}" has no registered functions`)
    }

    if (namespaceResolverRegistry.get(ns)!.has(false)) {
      const res: any = {};

      namespaceResolverRegistry.get(ns)!.get(false)!.forEach((value, key) => {
        if (value instanceof Map) {
          res[key] = Object.fromEntries(value)
        } else {
          res[key] = value;
        }
      });

      queryResolvers[ns] = () => res;
    }

    if (namespaceResolverRegistry.get(ns)!.has(true)) {
      const res: any = {};

      namespaceResolverRegistry.get(ns)!.get(true)!.forEach((value, key) => {
        if (value instanceof Map) {
          res[key] = Object.fromEntries(value)
        } else {
          res[key] = value;
        }
      });

      mutationResolvers[ns] = () => res;
    }
  });

  const resolvers: any = {};

  if (Object.keys(queryResolvers).length > 0) {
    resolvers.Query = queryResolvers;
  }

  if (Object.keys(mutationResolvers).length > 0) {
    resolvers.Mutation = mutationResolvers;
  }

  return resolvers;
}

type SchemaBaseOrSub =
  ThunkObjMap<GraphQLFieldConfig<any, any>>
  | Map<string, ThunkObjMap<GraphQLFieldConfig<any, any>>>;
const namespaceResolverSchemaRegistry = new Map<string, Map<boolean, Map<string, SchemaBaseOrSub>>>();

export const registerResolverSchema = (namespace: string, name: string, schema: SchemaBaseOrSub, mutation: boolean = false, subspace: string | undefined = undefined, config: ServiceConfig) => {
  if (!namespaceResolverSchemaRegistry.has(namespace)) {
    namespaceResolverSchemaRegistry.set(namespace, new Map());
  }

  if ( subspace && (config as any)[subspace]) {
    const blacklistMethods = (config as any)[subspace].methods.blacklist;
    if (blacklistMethods.includes(name)) {
      return;
    }
  }

  if (!namespaceResolverSchemaRegistry.get(namespace)!.has(mutation)) {
    namespaceResolverSchemaRegistry.get(namespace)!.set(mutation, new Map());
  }

  let space = namespaceResolverSchemaRegistry.get(namespace)!.get(mutation)!;
  if (subspace) {
    if (!space.has(subspace)) {
      space.set(subspace, new Map());
    }
    space = space.get(subspace)! as Map<string, ThunkObjMap<GraphQLFieldConfig<any, any>>>;
  }

  if (space.has(name)) {
    if (subspace) {
      throw new Error(`Namespace "${namespace}"."${subspace}" already contains a schema: ${name} (mutation: ${mutation})`);
    } else {
      throw new Error(`Namespace "${namespace}" already contains a schema: ${name} (mutation: ${mutation})`);
    }
  }

  // register create, update and upsert with Mutate
  if (Mutate.indexOf(name) > -1) {
    name = 'Mutate';
  }
  space.set(name, schema);
}

export const generateSchema = (setup: { prefix: string, namespace: string }[]) => {
  const queryFields: GraphQLFieldConfigMap<any, any> = {};
  const mutationFields: GraphQLFieldConfigMap<any, any> = {};

  setup.forEach(s => {
    if (!namespaceResolverSchemaRegistry.has(s.namespace)) {
      throw new Error(`Namespace "${s.namespace}" has no registered schemas`)
    }

    if (namespaceResolverSchemaRegistry.get(s.namespace)!.has(false)) {
      const fields: GraphQLFieldConfigMap<any, any> = {};

      namespaceResolverSchemaRegistry.get(s.namespace)!.get(false)!.forEach((value, key) => {
        if (value instanceof Map) {
          const capitalName = capitalizeProtoName(key);
          fields[key] = {
            type: new GraphQLNonNull(new GraphQLObjectType({
              name: s.prefix + capitalName + 'Query',
              fields: Object.fromEntries(value) as unknown as GraphQLFieldConfigMap<any, any>,
            }))
          };
        } else {
          fields[key] = value as any;
        }
      });

      queryFields[s.namespace] = {
        type: new GraphQLNonNull(new GraphQLObjectType({
          name: s.prefix + 'Query',
          fields
        }))
      };
    }

    if (namespaceResolverSchemaRegistry.get(s.namespace)!.has(true)) {
      const fields: GraphQLFieldConfigMap<any, any> = {};

      namespaceResolverSchemaRegistry.get(s.namespace)!.get(true)!.forEach((value, key) => {
        if (value instanceof Map) {
          const capitalName = capitalizeProtoName(key);
          fields[key] = {
            type: new GraphQLNonNull(new GraphQLObjectType({
              name: s.prefix + capitalName + 'Mutation',
              fields: Object.fromEntries(value) as unknown as GraphQLFieldConfigMap<any, any>,
            }))
          };
        } else {
          fields[key] = value as any;
        }
      });

      mutationFields[s.namespace] = {
        type: new GraphQLNonNull(new GraphQLObjectType({
          name: s.prefix + 'Mutation',
          fields
        }))
      }
    }
  });

  const config: any = {};

  if (Object.keys(queryFields).length > 0) {
    config.query = new GraphQLObjectType({
      name: 'Query',
      fields: queryFields
    });
  }

  if (Object.keys(mutationFields).length > 0) {
    config.mutation = new GraphQLObjectType({
      name: 'Mutation',
      fields: mutationFields
    });
  }

  return new GraphQLSchema(config);
}

export const getWhitelistBlacklistConfig = (
  metaService: ServiceDescriptorProto,
  config: ServiceConfig,
  meta: ProtoMetadata,
  entity: string
): { queries: Set<string>, mutations: Set<string> } => {
  const queryList: string[] = [];
  if (meta.options && meta.options.services && meta.options!.services[metaService.name] && meta.options!.services[metaService.name].methods) {
    const methods = meta.options!.services[metaService.name].methods!;
    for (const key of Object.keys(methods)) {
      if ('is_query' in methods[key] && methods[key]['is_query']) {
        queryList.push(key);
      }
    }
  }

  const mut: Set<string> = new Set(metaService.method!.map(m => m.name!).filter(key => queryList.indexOf(key) < 0) as any)
  const que: Set<string> = new Set(metaService.method!.map(m => m.name!).filter(key => queryList.indexOf(key) >= 0) as any)

  if (config[entity]) {
    if (config[entity]?.methods?.whitelist) {
      const whitelist = new Set(config[entity].methods.whitelist);
      mut.forEach(key => {
        if (whitelist.has(key as any)) {
          whitelist.delete(key as any);
        } else {
          mut.delete(key);
        }
      });

      que.forEach(key => {
        if (whitelist.has(key as any)) {
          whitelist.delete(key as any);
        } else {
          que.delete(key);
        }
      });

      if (whitelist.size > 0) {
        // TODO Log error that whitelist contains methods that don't exist
        console.error('Whitelist contains undefined methods:', whitelist)
      }
    } else if (config[entity]?.methods?.blacklist) {
      const blacklist = new Set(config[entity].methods.blacklist);
      mut.forEach(key => {
        if (blacklist.has(key as any)) {
          blacklist.delete(key as any);
          mut.delete(key);
        }
      });

      que.forEach(key => {
        if (blacklist.has(key as any)) {
          blacklist.delete(key as any);
          que.delete(key);
        }
      });

      if (blacklist.size > 0) {
        // TODO Log error that blacklist contains methods that don't exist
        console.error('Blacklist contains undefined methods:', blacklist)
      }
    }
  }

  if (Mutate.findIndex(val => mut.has(val)) > -1) {
    mut.add('Mutate');
  }

  return {
    mutations: mut,
    queries: que
  };
}

export const getAndGenerateSchema = <TSource, TContext>(
  service: ServiceDescriptorProto,
  namespace: string,
  prefix: string,
  cfg: ServiceConfig,
  meta: ProtoMetadata
) => {
  const {mutations, queries} = getWhitelistBlacklistConfig(service, cfg, meta, service.name)

  const schemas = getGQLSchemas(service);

  Object.keys(schemas).forEach(key => {
    registerResolverSchema(namespace, key, schemas[key] as any, !queries.has(key) && mutations.has(key), undefined, cfg)
  })

  return generateSchema([{prefix, namespace}]);
}

export const getAndGenerateResolvers =
  <T extends Record<string, any>, CTX extends ServiceClient<CTX, keyof CTX, T>, SRV = any, R = ResolverFn<any, any, ServiceClient<CTX, keyof CTX, T>, any>, NS extends keyof CTX = any>
  (service: ServiceDescriptorProto, namespace: NS, cfg: ServiceConfig, meta: ProtoMetadata, subspace: string | undefined = undefined, serviceKey: string | undefined = undefined): { [key in keyof SRV]: R } => {
    const {mutations, queries} = getWhitelistBlacklistConfig(service, cfg, meta, service.name);

    const func = getGQLResolverFunctions<T, CTX>(service, namespace, serviceKey || subspace || namespace, cfg);

    Object.keys(func).forEach(k => {
      registerResolverFunction(namespace as string, k, func[k], !queries.has(k) && mutations.has(k), subspace, service);
    });

    return generateResolver(namespace as string)
  }

export const generateSubServiceSchemas = (subServices: ProtoMetadata[], config: SubSpaceServiceConfig, namespace: string, prefix: string): GraphQLSchema => {
  subServices.forEach((meta) => {
    meta.fileDescriptor.service.forEach(service => {
      if (meta.options && meta.options.services && meta.options.services[service.name]) {
        const subName = meta.options.services[service.name].options!['service_name'];
        const {mutations, queries} = getWhitelistBlacklistConfig(service, config, meta, subName)

        const schemas = getGQLSchemas(service);

        Object.keys(schemas).forEach(key => {
          registerResolverSchema(config.root ? subName : namespace, key, schemas[key] as any, !queries.has(key) && mutations.has(key), config.root ? undefined : subName, config)
        })
      }
    })
  });

  if (config.root) {
    return generateSchema(flat(subServices.map(meta => {
      return meta.fileDescriptor.service.map(service => {
        if (meta.options && meta.options.services && meta.options.services[service.name]) {
          const subName = meta.options.services[service.name].options!['service_name'];

          return ({
            prefix: prefix + subName.substr(0, 1).toUpperCase() + subName.substr(1).toLowerCase(),
            namespace: subName
          } as any);
        }
        return null;
      }).filter(s => s !== null);
    })));
  }

  return generateSchema([{prefix, namespace}]);
}

export const generateSubServiceResolvers = <T, M extends Record<string, any>, CTX extends ServiceClient<CTX, keyof CTX, M>>(subServices: ProtoMetadata[], config: SubSpaceServiceConfig, namespace: string): T => {
  subServices.forEach((meta) => {
    meta.fileDescriptor.service.forEach(service => {
      if (meta.options && meta.options.services && meta.options.services[service.name]) {
        const subName = meta.options.services[service.name].options!['service_name'];
        const {mutations, queries} = getWhitelistBlacklistConfig(service, config, meta, subName);

        const func = getGQLResolverFunctions<M, CTX>(service, namespace, subName || namespace, config);

        Object.keys(func).forEach(k => {
          const regNamespace = config.root ? subName : namespace;
          const regSubspace = config.root ? undefined : subName;
          registerResolverFunction(regNamespace, k, func[k] as any, !queries.has(k) && mutations.has(k), regSubspace, service);
        });
      }
    })
  });

  if (config.root) {
    return generateResolver(...flat(subServices.map(meta => {
      return meta.fileDescriptor.service.map(service => {
        if (meta.options && meta.options.services && meta.options.services[service.name]) {
          return meta.options.services[service.name].options!['service_name'];
        }
        return null;
      }).filter(s => s !== null);
    })));
  }

  const finalResolver = generateResolver(namespace);

  subServices.forEach((meta) => {
    meta.fileDescriptor.service.forEach(service => {
      if (meta.options && meta.options.messages) {
        for (const key of Object.keys(meta.options.messages)) {
          const message = meta.options.messages[key];
          if (message.fields) {
            const typing = getTyping('.' + meta.fileDescriptor.package + '.' + key);
            if (typing) {
              const result: any = {};
              for (const fieldName of Object.keys(message.fields)) {
                const field = message.fields[fieldName];
                if ('resolver' in field) {
                  const fieldJsonName = snakeToCamel(fieldName);
                  const resolver = field['resolver'] as Resolver;

                  // TODO This creates an N+1 problem!
                  result[resolver.fieldName] = async (parent: any, _: any, ctx: any) => {
                    if (!parent || !(fieldJsonName in parent) || parent[fieldJsonName] === undefined) {
                      return undefined;
                    }

                    const client = ctx[resolver.targetService].client;
                    const service = client[resolver.targetSubService];

                    const idList: string[] = Array.isArray(parent[fieldJsonName]) ? parent[fieldJsonName] : [parent[fieldJsonName]];

                    // TODO Support custom input messages
                    const req = ReadRequest.fromPartial({
                      filters: [{
                        filter: idList.map(id => ({
                          field: 'id',
                          operation: Filter_Operation.eq,
                          value: id,
                          type: Filter_ValueType.STRING
                        })),
                        operator: FilterOp_Operator.or
                      }]
                    } as any);

                    req.subject = getTyping(authSubjectType)!.processor.fromPartial({});

                    const authToken = ctx.request!.req.headers['authorization'];
                    if (authToken && authToken.startsWith('Bearer ')) {
                      req.subject!.token = authToken.split(' ')[1];
                    }

                    const methodFunc = service[camelCase(resolver.targetMethod)] || service[resolver.targetMethod];
                    const result = await methodFunc(req);

                    if (result && result.items && result.items.length) {
                      if (Array.isArray(parent[fieldJsonName])) {
                        return result.items.map((item: any) => item.payload);
                      } else {
                        return result.items[0].payload;
                      }
                    }

                    return undefined
                  }
                }
              }
              finalResolver[typing.output.name] = result;
            }
          }
        }
      }
    })
  });

  return finalResolver;
}

const snakeToCamel = (s: string): string => {
  return s
    .split('_')
    .map((word, i) => {
      if (i === 0) {
        // if first symbol is "_" then skip it
        return word ? word[0] + word.substring(1).toLowerCase() : '';
      } else {
        return capitalize(word.toLowerCase());
      }
    })
    .join('');
}

const capitalize = (s: string): string => {
  return s.substring(0, 1).toUpperCase() + s.substring(1);
}

export function camelCase(s: string): string {
  return s.substring(0, 1).toLowerCase() + s.substring(1);
}
