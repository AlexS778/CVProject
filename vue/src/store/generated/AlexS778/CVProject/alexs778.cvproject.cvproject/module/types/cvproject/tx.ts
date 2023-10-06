/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "alexs778.cvproject.cvproject";

export interface MsgCreateCV {
  creator: string;
  name: string;
  education: string;
  summary: string;
  skills: string;
  experience: string;
  companies: string[];
}

export interface MsgCreateCVResponse {}

export interface MsgUpdateCV {
  creator: string;
  cosmosAdress: string;
  name: string;
  education: string;
  summary: string;
  skills: string;
  experience: string;
  companies: string[];
}

export interface MsgUpdateCVResponse {}

export interface MsgConfirmCV {
  creator: string;
  name: string;
  cosmosAdress: string;
}

export interface MsgConfirmCVResponse {}

const baseMsgCreateCV: object = {
  creator: "",
  name: "",
  education: "",
  summary: "",
  skills: "",
  experience: "",
  companies: "",
};

export const MsgCreateCV = {
  encode(message: MsgCreateCV, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.education !== "") {
      writer.uint32(26).string(message.education);
    }
    if (message.summary !== "") {
      writer.uint32(34).string(message.summary);
    }
    if (message.skills !== "") {
      writer.uint32(42).string(message.skills);
    }
    if (message.experience !== "") {
      writer.uint32(50).string(message.experience);
    }
    for (const v of message.companies) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCV {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateCV } as MsgCreateCV;
    message.companies = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.education = reader.string();
          break;
        case 4:
          message.summary = reader.string();
          break;
        case 5:
          message.skills = reader.string();
          break;
        case 6:
          message.experience = reader.string();
          break;
        case 7:
          message.companies.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCV {
    const message = { ...baseMsgCreateCV } as MsgCreateCV;
    message.companies = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.education !== undefined && object.education !== null) {
      message.education = String(object.education);
    } else {
      message.education = "";
    }
    if (object.summary !== undefined && object.summary !== null) {
      message.summary = String(object.summary);
    } else {
      message.summary = "";
    }
    if (object.skills !== undefined && object.skills !== null) {
      message.skills = String(object.skills);
    } else {
      message.skills = "";
    }
    if (object.experience !== undefined && object.experience !== null) {
      message.experience = String(object.experience);
    } else {
      message.experience = "";
    }
    if (object.companies !== undefined && object.companies !== null) {
      for (const e of object.companies) {
        message.companies.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgCreateCV): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.education !== undefined && (obj.education = message.education);
    message.summary !== undefined && (obj.summary = message.summary);
    message.skills !== undefined && (obj.skills = message.skills);
    message.experience !== undefined && (obj.experience = message.experience);
    if (message.companies) {
      obj.companies = message.companies.map((e) => e);
    } else {
      obj.companies = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateCV>): MsgCreateCV {
    const message = { ...baseMsgCreateCV } as MsgCreateCV;
    message.companies = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.education !== undefined && object.education !== null) {
      message.education = object.education;
    } else {
      message.education = "";
    }
    if (object.summary !== undefined && object.summary !== null) {
      message.summary = object.summary;
    } else {
      message.summary = "";
    }
    if (object.skills !== undefined && object.skills !== null) {
      message.skills = object.skills;
    } else {
      message.skills = "";
    }
    if (object.experience !== undefined && object.experience !== null) {
      message.experience = object.experience;
    } else {
      message.experience = "";
    }
    if (object.companies !== undefined && object.companies !== null) {
      for (const e of object.companies) {
        message.companies.push(e);
      }
    }
    return message;
  },
};

const baseMsgCreateCVResponse: object = {};

export const MsgCreateCVResponse = {
  encode(_: MsgCreateCVResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCVResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateCVResponse } as MsgCreateCVResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateCVResponse {
    const message = { ...baseMsgCreateCVResponse } as MsgCreateCVResponse;
    return message;
  },

  toJSON(_: MsgCreateCVResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateCVResponse>): MsgCreateCVResponse {
    const message = { ...baseMsgCreateCVResponse } as MsgCreateCVResponse;
    return message;
  },
};

const baseMsgUpdateCV: object = {
  creator: "",
  cosmosAdress: "",
  name: "",
  education: "",
  summary: "",
  skills: "",
  experience: "",
  companies: "",
};

export const MsgUpdateCV = {
  encode(message: MsgUpdateCV, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cosmosAdress !== "") {
      writer.uint32(18).string(message.cosmosAdress);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.education !== "") {
      writer.uint32(34).string(message.education);
    }
    if (message.summary !== "") {
      writer.uint32(42).string(message.summary);
    }
    if (message.skills !== "") {
      writer.uint32(50).string(message.skills);
    }
    if (message.experience !== "") {
      writer.uint32(58).string(message.experience);
    }
    for (const v of message.companies) {
      writer.uint32(66).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateCV {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateCV } as MsgUpdateCV;
    message.companies = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cosmosAdress = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.education = reader.string();
          break;
        case 5:
          message.summary = reader.string();
          break;
        case 6:
          message.skills = reader.string();
          break;
        case 7:
          message.experience = reader.string();
          break;
        case 8:
          message.companies.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateCV {
    const message = { ...baseMsgUpdateCV } as MsgUpdateCV;
    message.companies = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.cosmosAdress !== undefined && object.cosmosAdress !== null) {
      message.cosmosAdress = String(object.cosmosAdress);
    } else {
      message.cosmosAdress = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.education !== undefined && object.education !== null) {
      message.education = String(object.education);
    } else {
      message.education = "";
    }
    if (object.summary !== undefined && object.summary !== null) {
      message.summary = String(object.summary);
    } else {
      message.summary = "";
    }
    if (object.skills !== undefined && object.skills !== null) {
      message.skills = String(object.skills);
    } else {
      message.skills = "";
    }
    if (object.experience !== undefined && object.experience !== null) {
      message.experience = String(object.experience);
    } else {
      message.experience = "";
    }
    if (object.companies !== undefined && object.companies !== null) {
      for (const e of object.companies) {
        message.companies.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgUpdateCV): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cosmosAdress !== undefined &&
      (obj.cosmosAdress = message.cosmosAdress);
    message.name !== undefined && (obj.name = message.name);
    message.education !== undefined && (obj.education = message.education);
    message.summary !== undefined && (obj.summary = message.summary);
    message.skills !== undefined && (obj.skills = message.skills);
    message.experience !== undefined && (obj.experience = message.experience);
    if (message.companies) {
      obj.companies = message.companies.map((e) => e);
    } else {
      obj.companies = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateCV>): MsgUpdateCV {
    const message = { ...baseMsgUpdateCV } as MsgUpdateCV;
    message.companies = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.cosmosAdress !== undefined && object.cosmosAdress !== null) {
      message.cosmosAdress = object.cosmosAdress;
    } else {
      message.cosmosAdress = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.education !== undefined && object.education !== null) {
      message.education = object.education;
    } else {
      message.education = "";
    }
    if (object.summary !== undefined && object.summary !== null) {
      message.summary = object.summary;
    } else {
      message.summary = "";
    }
    if (object.skills !== undefined && object.skills !== null) {
      message.skills = object.skills;
    } else {
      message.skills = "";
    }
    if (object.experience !== undefined && object.experience !== null) {
      message.experience = object.experience;
    } else {
      message.experience = "";
    }
    if (object.companies !== undefined && object.companies !== null) {
      for (const e of object.companies) {
        message.companies.push(e);
      }
    }
    return message;
  },
};

const baseMsgUpdateCVResponse: object = {};

export const MsgUpdateCVResponse = {
  encode(_: MsgUpdateCVResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateCVResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateCVResponse } as MsgUpdateCVResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateCVResponse {
    const message = { ...baseMsgUpdateCVResponse } as MsgUpdateCVResponse;
    return message;
  },

  toJSON(_: MsgUpdateCVResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateCVResponse>): MsgUpdateCVResponse {
    const message = { ...baseMsgUpdateCVResponse } as MsgUpdateCVResponse;
    return message;
  },
};

const baseMsgConfirmCV: object = { creator: "", name: "", cosmosAdress: "" };

export const MsgConfirmCV = {
  encode(message: MsgConfirmCV, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.cosmosAdress !== "") {
      writer.uint32(26).string(message.cosmosAdress);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgConfirmCV {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgConfirmCV } as MsgConfirmCV;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.cosmosAdress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgConfirmCV {
    const message = { ...baseMsgConfirmCV } as MsgConfirmCV;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.cosmosAdress !== undefined && object.cosmosAdress !== null) {
      message.cosmosAdress = String(object.cosmosAdress);
    } else {
      message.cosmosAdress = "";
    }
    return message;
  },

  toJSON(message: MsgConfirmCV): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.cosmosAdress !== undefined &&
      (obj.cosmosAdress = message.cosmosAdress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgConfirmCV>): MsgConfirmCV {
    const message = { ...baseMsgConfirmCV } as MsgConfirmCV;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.cosmosAdress !== undefined && object.cosmosAdress !== null) {
      message.cosmosAdress = object.cosmosAdress;
    } else {
      message.cosmosAdress = "";
    }
    return message;
  },
};

const baseMsgConfirmCVResponse: object = {};

export const MsgConfirmCVResponse = {
  encode(_: MsgConfirmCVResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgConfirmCVResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgConfirmCVResponse } as MsgConfirmCVResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgConfirmCVResponse {
    const message = { ...baseMsgConfirmCVResponse } as MsgConfirmCVResponse;
    return message;
  },

  toJSON(_: MsgConfirmCVResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgConfirmCVResponse>): MsgConfirmCVResponse {
    const message = { ...baseMsgConfirmCVResponse } as MsgConfirmCVResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateCV(request: MsgCreateCV): Promise<MsgCreateCVResponse>;
  UpdateCV(request: MsgUpdateCV): Promise<MsgUpdateCVResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  ConfirmCV(request: MsgConfirmCV): Promise<MsgConfirmCVResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateCV(request: MsgCreateCV): Promise<MsgCreateCVResponse> {
    const data = MsgCreateCV.encode(request).finish();
    const promise = this.rpc.request(
      "alexs778.cvproject.cvproject.Msg",
      "CreateCV",
      data
    );
    return promise.then((data) => MsgCreateCVResponse.decode(new Reader(data)));
  }

  UpdateCV(request: MsgUpdateCV): Promise<MsgUpdateCVResponse> {
    const data = MsgUpdateCV.encode(request).finish();
    const promise = this.rpc.request(
      "alexs778.cvproject.cvproject.Msg",
      "UpdateCV",
      data
    );
    return promise.then((data) => MsgUpdateCVResponse.decode(new Reader(data)));
  }

  ConfirmCV(request: MsgConfirmCV): Promise<MsgConfirmCVResponse> {
    const data = MsgConfirmCV.encode(request).finish();
    const promise = this.rpc.request(
      "alexs778.cvproject.cvproject.Msg",
      "ConfirmCV",
      data
    );
    return promise.then((data) =>
      MsgConfirmCVResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
