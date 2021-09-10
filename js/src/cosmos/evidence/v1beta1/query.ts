/* eslint-disable */
import Long from "long";
import {
  makeGenericClientConstructor,
  ChannelCredentials,
  ChannelOptions,
  UntypedServiceImplementation,
  handleUnaryCall,
  Client,
  ClientUnaryCall,
  Metadata,
  CallOptions,
  ServiceError,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "cosmos.evidence.v1beta1";

/** QueryEvidenceRequest is the request type for the Query/Evidence RPC method. */
export interface QueryEvidenceRequest {
  /** evidence_hash defines the hash of the requested evidence. */
  evidenceHash: Uint8Array;
}

/** QueryEvidenceResponse is the response type for the Query/Evidence RPC method. */
export interface QueryEvidenceResponse {
  /** evidence returns the requested evidence. */
  evidence?: Any;
}

/**
 * QueryEvidenceRequest is the request type for the Query/AllEvidence RPC
 * method.
 */
export interface QueryAllEvidenceRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryAllEvidenceResponse is the response type for the Query/AllEvidence RPC
 * method.
 */
export interface QueryAllEvidenceResponse {
  /** evidence returns all evidences. */
  evidence: Any[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

const baseQueryEvidenceRequest: object = {};

export const QueryEvidenceRequest = {
  encode(message: QueryEvidenceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.evidenceHash.length !== 0) {
      writer.uint32(10).bytes(message.evidenceHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEvidenceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryEvidenceRequest } as QueryEvidenceRequest;
    message.evidenceHash = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidenceHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEvidenceRequest {
    const message = { ...baseQueryEvidenceRequest } as QueryEvidenceRequest;
    message.evidenceHash = new Uint8Array();
    if (object.evidenceHash !== undefined && object.evidenceHash !== null) {
      message.evidenceHash = bytesFromBase64(object.evidenceHash);
    }
    return message;
  },

  toJSON(message: QueryEvidenceRequest): unknown {
    const obj: any = {};
    message.evidenceHash !== undefined &&
      (obj.evidenceHash = base64FromBytes(
        message.evidenceHash !== undefined ? message.evidenceHash : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryEvidenceRequest>): QueryEvidenceRequest {
    const message = { ...baseQueryEvidenceRequest } as QueryEvidenceRequest;
    if (object.evidenceHash !== undefined && object.evidenceHash !== null) {
      message.evidenceHash = object.evidenceHash;
    } else {
      message.evidenceHash = new Uint8Array();
    }
    return message;
  },
};

const baseQueryEvidenceResponse: object = {};

export const QueryEvidenceResponse = {
  encode(message: QueryEvidenceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.evidence !== undefined) {
      Any.encode(message.evidence, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEvidenceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryEvidenceResponse } as QueryEvidenceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidence = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEvidenceResponse {
    const message = { ...baseQueryEvidenceResponse } as QueryEvidenceResponse;
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = Any.fromJSON(object.evidence);
    } else {
      message.evidence = undefined;
    }
    return message;
  },

  toJSON(message: QueryEvidenceResponse): unknown {
    const obj: any = {};
    message.evidence !== undefined &&
      (obj.evidence = message.evidence ? Any.toJSON(message.evidence) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryEvidenceResponse>): QueryEvidenceResponse {
    const message = { ...baseQueryEvidenceResponse } as QueryEvidenceResponse;
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = Any.fromPartial(object.evidence);
    } else {
      message.evidence = undefined;
    }
    return message;
  },
};

const baseQueryAllEvidenceRequest: object = {};

export const QueryAllEvidenceRequest = {
  encode(message: QueryAllEvidenceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEvidenceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllEvidenceRequest } as QueryAllEvidenceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllEvidenceRequest {
    const message = { ...baseQueryAllEvidenceRequest } as QueryAllEvidenceRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllEvidenceRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllEvidenceRequest>): QueryAllEvidenceRequest {
    const message = { ...baseQueryAllEvidenceRequest } as QueryAllEvidenceRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllEvidenceResponse: object = {};

export const QueryAllEvidenceResponse = {
  encode(message: QueryAllEvidenceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.evidence) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEvidenceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllEvidenceResponse } as QueryAllEvidenceResponse;
    message.evidence = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidence.push(Any.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllEvidenceResponse {
    const message = { ...baseQueryAllEvidenceResponse } as QueryAllEvidenceResponse;
    message.evidence = [];
    if (object.evidence !== undefined && object.evidence !== null) {
      for (const e of object.evidence) {
        message.evidence.push(Any.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllEvidenceResponse): unknown {
    const obj: any = {};
    if (message.evidence) {
      obj.evidence = message.evidence.map((e) => (e ? Any.toJSON(e) : undefined));
    } else {
      obj.evidence = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllEvidenceResponse>): QueryAllEvidenceResponse {
    const message = { ...baseQueryAllEvidenceResponse } as QueryAllEvidenceResponse;
    message.evidence = [];
    if (object.evidence !== undefined && object.evidence !== null) {
      for (const e of object.evidence) {
        message.evidence.push(Any.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export const QueryService = {
  /** Evidence queries evidence based on evidence hash. */
  evidence: {
    path: "/cosmos.evidence.v1beta1.Query/Evidence",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryEvidenceRequest) =>
      Buffer.from(QueryEvidenceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryEvidenceRequest.decode(value),
    responseSerialize: (value: QueryEvidenceResponse) =>
      Buffer.from(QueryEvidenceResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryEvidenceResponse.decode(value),
  },
  /** AllEvidence queries all evidence. */
  allEvidence: {
    path: "/cosmos.evidence.v1beta1.Query/AllEvidence",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryAllEvidenceRequest) =>
      Buffer.from(QueryAllEvidenceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryAllEvidenceRequest.decode(value),
    responseSerialize: (value: QueryAllEvidenceResponse) =>
      Buffer.from(QueryAllEvidenceResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryAllEvidenceResponse.decode(value),
  },
} as const;

export interface QueryServer extends UntypedServiceImplementation {
  /** Evidence queries evidence based on evidence hash. */
  evidence: handleUnaryCall<QueryEvidenceRequest, QueryEvidenceResponse>;
  /** AllEvidence queries all evidence. */
  allEvidence: handleUnaryCall<QueryAllEvidenceRequest, QueryAllEvidenceResponse>;
}

export interface QueryClient extends Client {
  /** Evidence queries evidence based on evidence hash. */
  evidence(
    request: QueryEvidenceRequest,
    callback: (error: ServiceError | null, response: QueryEvidenceResponse) => void,
  ): ClientUnaryCall;
  evidence(
    request: QueryEvidenceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: QueryEvidenceResponse) => void,
  ): ClientUnaryCall;
  evidence(
    request: QueryEvidenceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryEvidenceResponse) => void,
  ): ClientUnaryCall;
  /** AllEvidence queries all evidence. */
  allEvidence(
    request: QueryAllEvidenceRequest,
    callback: (error: ServiceError | null, response: QueryAllEvidenceResponse) => void,
  ): ClientUnaryCall;
  allEvidence(
    request: QueryAllEvidenceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: QueryAllEvidenceResponse) => void,
  ): ClientUnaryCall;
  allEvidence(
    request: QueryAllEvidenceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryAllEvidenceResponse) => void,
  ): ClientUnaryCall;
}

export const QueryClient = makeGenericClientConstructor(
  QueryService,
  "cosmos.evidence.v1beta1.Query",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>): QueryClient;
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob || ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}