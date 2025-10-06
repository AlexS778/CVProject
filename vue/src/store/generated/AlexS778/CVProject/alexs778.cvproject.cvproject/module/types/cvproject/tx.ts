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
  companiesUUID: string[];
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
  companiesUUID: string[];
}

export interface MsgUpdateCVResponse {}

export interface MsgConfirmCV {
  creator: string;
  name: string;
  cosmosAdress: string;
}

export interface MsgConfirmCVResponse {}

export interface MsgCreateCompanyWorkedIn {
  creator: string;
  uuid: string;
  companyName: string;
  timestampStart: string;
  timestampEnd: string;
  comments: string;
}

export interface MsgCreateCompanyWorkedInResponse {}

export interface MsgUpdateCompanyWorkedIn {
  creator: string;
  uuid: string;
  companyName: string;
  timestampStart: string;
  timestampEnd: string;
  comments: string;
}

export interface MsgUpdateCompanyWorkedInResponse {}

export interface MsgDeleteCompanyWorkedIn {
  creator: string;
  uuid: string;
}

export interface MsgDeleteCompanyWorkedInResponse {}

export interface MsgCreateCompany {
  creator: string;
  uUID: string;
  name: string;
}

export interface MsgCreateCompanyResponse {}

export interface MsgUpdateCompany {
  creator: string;
  uUID: string;
  name: string;
}

export interface MsgUpdateCompanyResponse {}

export interface MsgDeleteCompany {
  creator: string;
  uUID: string;
}

export interface MsgDeleteCompanyResponse {}

const baseMsgCreateCV: object = {
  creator: "",
  name: "",
  education: "",
  summary: "",
  skills: "",
  experience: "",
  companiesUUID: "",
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
    for (const v of message.companiesUUID) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCV {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateCV } as MsgCreateCV;
    message.companiesUUID = [];
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
          message.companiesUUID.push(reader.string());
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
    message.companiesUUID = [];
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
    if (object.companiesUUID !== undefined && object.companiesUUID !== null) {
      for (const e of object.companiesUUID) {
        message.companiesUUID.push(String(e));
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
    if (message.companiesUUID) {
      obj.companiesUUID = message.companiesUUID.map((e) => e);
    } else {
      obj.companiesUUID = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateCV>): MsgCreateCV {
    const message = { ...baseMsgCreateCV } as MsgCreateCV;
    message.companiesUUID = [];
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
    if (object.companiesUUID !== undefined && object.companiesUUID !== null) {
      for (const e of object.companiesUUID) {
        message.companiesUUID.push(e);
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
  companiesUUID: "",
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
    for (const v of message.companiesUUID) {
      writer.uint32(66).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateCV {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateCV } as MsgUpdateCV;
    message.companiesUUID = [];
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
          message.companiesUUID.push(reader.string());
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
    message.companiesUUID = [];
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
    if (object.companiesUUID !== undefined && object.companiesUUID !== null) {
      for (const e of object.companiesUUID) {
        message.companiesUUID.push(String(e));
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
    if (message.companiesUUID) {
      obj.companiesUUID = message.companiesUUID.map((e) => e);
    } else {
      obj.companiesUUID = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateCV>): MsgUpdateCV {
    const message = { ...baseMsgUpdateCV } as MsgUpdateCV;
    message.companiesUUID = [];
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
    if (object.companiesUUID !== undefined && object.companiesUUID !== null) {
      for (const e of object.companiesUUID) {
        message.companiesUUID.push(e);
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

const baseMsgCreateCompanyWorkedIn: object = {
  creator: "",
  uuid: "",
  companyName: "",
  timestampStart: "",
  timestampEnd: "",
  comments: "",
};

export const MsgCreateCompanyWorkedIn = {
  encode(
    message: MsgCreateCompanyWorkedIn,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.uuid !== "") {
      writer.uint32(18).string(message.uuid);
    }
    if (message.companyName !== "") {
      writer.uint32(26).string(message.companyName);
    }
    if (message.timestampStart !== "") {
      writer.uint32(34).string(message.timestampStart);
    }
    if (message.timestampEnd !== "") {
      writer.uint32(42).string(message.timestampEnd);
    }
    if (message.comments !== "") {
      writer.uint32(50).string(message.comments);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateCompanyWorkedIn {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateCompanyWorkedIn,
    } as MsgCreateCompanyWorkedIn;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.uuid = reader.string();
          break;
        case 3:
          message.companyName = reader.string();
          break;
        case 4:
          message.timestampStart = reader.string();
          break;
        case 5:
          message.timestampEnd = reader.string();
          break;
        case 6:
          message.comments = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCompanyWorkedIn {
    const message = {
      ...baseMsgCreateCompanyWorkedIn,
    } as MsgCreateCompanyWorkedIn;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = String(object.uuid);
    } else {
      message.uuid = "";
    }
    if (object.companyName !== undefined && object.companyName !== null) {
      message.companyName = String(object.companyName);
    } else {
      message.companyName = "";
    }
    if (object.timestampStart !== undefined && object.timestampStart !== null) {
      message.timestampStart = String(object.timestampStart);
    } else {
      message.timestampStart = "";
    }
    if (object.timestampEnd !== undefined && object.timestampEnd !== null) {
      message.timestampEnd = String(object.timestampEnd);
    } else {
      message.timestampEnd = "";
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = "";
    }
    return message;
  },

  toJSON(message: MsgCreateCompanyWorkedIn): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.companyName !== undefined &&
      (obj.companyName = message.companyName);
    message.timestampStart !== undefined &&
      (obj.timestampStart = message.timestampStart);
    message.timestampEnd !== undefined &&
      (obj.timestampEnd = message.timestampEnd);
    message.comments !== undefined && (obj.comments = message.comments);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateCompanyWorkedIn>
  ): MsgCreateCompanyWorkedIn {
    const message = {
      ...baseMsgCreateCompanyWorkedIn,
    } as MsgCreateCompanyWorkedIn;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = object.uuid;
    } else {
      message.uuid = "";
    }
    if (object.companyName !== undefined && object.companyName !== null) {
      message.companyName = object.companyName;
    } else {
      message.companyName = "";
    }
    if (object.timestampStart !== undefined && object.timestampStart !== null) {
      message.timestampStart = object.timestampStart;
    } else {
      message.timestampStart = "";
    }
    if (object.timestampEnd !== undefined && object.timestampEnd !== null) {
      message.timestampEnd = object.timestampEnd;
    } else {
      message.timestampEnd = "";
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = "";
    }
    return message;
  },
};

const baseMsgCreateCompanyWorkedInResponse: object = {};

export const MsgCreateCompanyWorkedInResponse = {
  encode(
    _: MsgCreateCompanyWorkedInResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateCompanyWorkedInResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateCompanyWorkedInResponse,
    } as MsgCreateCompanyWorkedInResponse;
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

  fromJSON(_: any): MsgCreateCompanyWorkedInResponse {
    const message = {
      ...baseMsgCreateCompanyWorkedInResponse,
    } as MsgCreateCompanyWorkedInResponse;
    return message;
  },

  toJSON(_: MsgCreateCompanyWorkedInResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateCompanyWorkedInResponse>
  ): MsgCreateCompanyWorkedInResponse {
    const message = {
      ...baseMsgCreateCompanyWorkedInResponse,
    } as MsgCreateCompanyWorkedInResponse;
    return message;
  },
};

const baseMsgUpdateCompanyWorkedIn: object = {
  creator: "",
  uuid: "",
  companyName: "",
  timestampStart: "",
  timestampEnd: "",
  comments: "",
};

export const MsgUpdateCompanyWorkedIn = {
  encode(
    message: MsgUpdateCompanyWorkedIn,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.uuid !== "") {
      writer.uint32(18).string(message.uuid);
    }
    if (message.companyName !== "") {
      writer.uint32(26).string(message.companyName);
    }
    if (message.timestampStart !== "") {
      writer.uint32(34).string(message.timestampStart);
    }
    if (message.timestampEnd !== "") {
      writer.uint32(42).string(message.timestampEnd);
    }
    if (message.comments !== "") {
      writer.uint32(50).string(message.comments);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateCompanyWorkedIn {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateCompanyWorkedIn,
    } as MsgUpdateCompanyWorkedIn;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.uuid = reader.string();
          break;
        case 3:
          message.companyName = reader.string();
          break;
        case 4:
          message.timestampStart = reader.string();
          break;
        case 5:
          message.timestampEnd = reader.string();
          break;
        case 6:
          message.comments = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateCompanyWorkedIn {
    const message = {
      ...baseMsgUpdateCompanyWorkedIn,
    } as MsgUpdateCompanyWorkedIn;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = String(object.uuid);
    } else {
      message.uuid = "";
    }
    if (object.companyName !== undefined && object.companyName !== null) {
      message.companyName = String(object.companyName);
    } else {
      message.companyName = "";
    }
    if (object.timestampStart !== undefined && object.timestampStart !== null) {
      message.timestampStart = String(object.timestampStart);
    } else {
      message.timestampStart = "";
    }
    if (object.timestampEnd !== undefined && object.timestampEnd !== null) {
      message.timestampEnd = String(object.timestampEnd);
    } else {
      message.timestampEnd = "";
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateCompanyWorkedIn): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.companyName !== undefined &&
      (obj.companyName = message.companyName);
    message.timestampStart !== undefined &&
      (obj.timestampStart = message.timestampStart);
    message.timestampEnd !== undefined &&
      (obj.timestampEnd = message.timestampEnd);
    message.comments !== undefined && (obj.comments = message.comments);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateCompanyWorkedIn>
  ): MsgUpdateCompanyWorkedIn {
    const message = {
      ...baseMsgUpdateCompanyWorkedIn,
    } as MsgUpdateCompanyWorkedIn;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = object.uuid;
    } else {
      message.uuid = "";
    }
    if (object.companyName !== undefined && object.companyName !== null) {
      message.companyName = object.companyName;
    } else {
      message.companyName = "";
    }
    if (object.timestampStart !== undefined && object.timestampStart !== null) {
      message.timestampStart = object.timestampStart;
    } else {
      message.timestampStart = "";
    }
    if (object.timestampEnd !== undefined && object.timestampEnd !== null) {
      message.timestampEnd = object.timestampEnd;
    } else {
      message.timestampEnd = "";
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = "";
    }
    return message;
  },
};

const baseMsgUpdateCompanyWorkedInResponse: object = {};

export const MsgUpdateCompanyWorkedInResponse = {
  encode(
    _: MsgUpdateCompanyWorkedInResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateCompanyWorkedInResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateCompanyWorkedInResponse,
    } as MsgUpdateCompanyWorkedInResponse;
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

  fromJSON(_: any): MsgUpdateCompanyWorkedInResponse {
    const message = {
      ...baseMsgUpdateCompanyWorkedInResponse,
    } as MsgUpdateCompanyWorkedInResponse;
    return message;
  },

  toJSON(_: MsgUpdateCompanyWorkedInResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateCompanyWorkedInResponse>
  ): MsgUpdateCompanyWorkedInResponse {
    const message = {
      ...baseMsgUpdateCompanyWorkedInResponse,
    } as MsgUpdateCompanyWorkedInResponse;
    return message;
  },
};

const baseMsgDeleteCompanyWorkedIn: object = { creator: "", uuid: "" };

export const MsgDeleteCompanyWorkedIn = {
  encode(
    message: MsgDeleteCompanyWorkedIn,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.uuid !== "") {
      writer.uint32(18).string(message.uuid);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteCompanyWorkedIn {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteCompanyWorkedIn,
    } as MsgDeleteCompanyWorkedIn;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.uuid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteCompanyWorkedIn {
    const message = {
      ...baseMsgDeleteCompanyWorkedIn,
    } as MsgDeleteCompanyWorkedIn;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = String(object.uuid);
    } else {
      message.uuid = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteCompanyWorkedIn): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.uuid !== undefined && (obj.uuid = message.uuid);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteCompanyWorkedIn>
  ): MsgDeleteCompanyWorkedIn {
    const message = {
      ...baseMsgDeleteCompanyWorkedIn,
    } as MsgDeleteCompanyWorkedIn;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = object.uuid;
    } else {
      message.uuid = "";
    }
    return message;
  },
};

const baseMsgDeleteCompanyWorkedInResponse: object = {};

export const MsgDeleteCompanyWorkedInResponse = {
  encode(
    _: MsgDeleteCompanyWorkedInResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteCompanyWorkedInResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteCompanyWorkedInResponse,
    } as MsgDeleteCompanyWorkedInResponse;
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

  fromJSON(_: any): MsgDeleteCompanyWorkedInResponse {
    const message = {
      ...baseMsgDeleteCompanyWorkedInResponse,
    } as MsgDeleteCompanyWorkedInResponse;
    return message;
  },

  toJSON(_: MsgDeleteCompanyWorkedInResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteCompanyWorkedInResponse>
  ): MsgDeleteCompanyWorkedInResponse {
    const message = {
      ...baseMsgDeleteCompanyWorkedInResponse,
    } as MsgDeleteCompanyWorkedInResponse;
    return message;
  },
};

const baseMsgCreateCompany: object = { creator: "", uUID: "", name: "" };

export const MsgCreateCompany = {
  encode(message: MsgCreateCompany, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.uUID !== "") {
      writer.uint32(18).string(message.uUID);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCompany {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateCompany } as MsgCreateCompany;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.uUID = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCompany {
    const message = { ...baseMsgCreateCompany } as MsgCreateCompany;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.uUID !== undefined && object.uUID !== null) {
      message.uUID = String(object.uUID);
    } else {
      message.uUID = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: MsgCreateCompany): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.uUID !== undefined && (obj.uUID = message.uUID);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateCompany>): MsgCreateCompany {
    const message = { ...baseMsgCreateCompany } as MsgCreateCompany;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.uUID !== undefined && object.uUID !== null) {
      message.uUID = object.uUID;
    } else {
      message.uUID = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseMsgCreateCompanyResponse: object = {};

export const MsgCreateCompanyResponse = {
  encode(
    _: MsgCreateCompanyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateCompanyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateCompanyResponse,
    } as MsgCreateCompanyResponse;
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

  fromJSON(_: any): MsgCreateCompanyResponse {
    const message = {
      ...baseMsgCreateCompanyResponse,
    } as MsgCreateCompanyResponse;
    return message;
  },

  toJSON(_: MsgCreateCompanyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateCompanyResponse>
  ): MsgCreateCompanyResponse {
    const message = {
      ...baseMsgCreateCompanyResponse,
    } as MsgCreateCompanyResponse;
    return message;
  },
};

const baseMsgUpdateCompany: object = { creator: "", uUID: "", name: "" };

export const MsgUpdateCompany = {
  encode(message: MsgUpdateCompany, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.uUID !== "") {
      writer.uint32(18).string(message.uUID);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateCompany {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateCompany } as MsgUpdateCompany;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.uUID = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateCompany {
    const message = { ...baseMsgUpdateCompany } as MsgUpdateCompany;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.uUID !== undefined && object.uUID !== null) {
      message.uUID = String(object.uUID);
    } else {
      message.uUID = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateCompany): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.uUID !== undefined && (obj.uUID = message.uUID);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateCompany>): MsgUpdateCompany {
    const message = { ...baseMsgUpdateCompany } as MsgUpdateCompany;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.uUID !== undefined && object.uUID !== null) {
      message.uUID = object.uUID;
    } else {
      message.uUID = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseMsgUpdateCompanyResponse: object = {};

export const MsgUpdateCompanyResponse = {
  encode(
    _: MsgUpdateCompanyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateCompanyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateCompanyResponse,
    } as MsgUpdateCompanyResponse;
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

  fromJSON(_: any): MsgUpdateCompanyResponse {
    const message = {
      ...baseMsgUpdateCompanyResponse,
    } as MsgUpdateCompanyResponse;
    return message;
  },

  toJSON(_: MsgUpdateCompanyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateCompanyResponse>
  ): MsgUpdateCompanyResponse {
    const message = {
      ...baseMsgUpdateCompanyResponse,
    } as MsgUpdateCompanyResponse;
    return message;
  },
};

const baseMsgDeleteCompany: object = { creator: "", uUID: "" };

export const MsgDeleteCompany = {
  encode(message: MsgDeleteCompany, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.uUID !== "") {
      writer.uint32(18).string(message.uUID);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteCompany {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteCompany } as MsgDeleteCompany;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.uUID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteCompany {
    const message = { ...baseMsgDeleteCompany } as MsgDeleteCompany;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.uUID !== undefined && object.uUID !== null) {
      message.uUID = String(object.uUID);
    } else {
      message.uUID = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteCompany): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.uUID !== undefined && (obj.uUID = message.uUID);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteCompany>): MsgDeleteCompany {
    const message = { ...baseMsgDeleteCompany } as MsgDeleteCompany;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.uUID !== undefined && object.uUID !== null) {
      message.uUID = object.uUID;
    } else {
      message.uUID = "";
    }
    return message;
  },
};

const baseMsgDeleteCompanyResponse: object = {};

export const MsgDeleteCompanyResponse = {
  encode(
    _: MsgDeleteCompanyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteCompanyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteCompanyResponse,
    } as MsgDeleteCompanyResponse;
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

  fromJSON(_: any): MsgDeleteCompanyResponse {
    const message = {
      ...baseMsgDeleteCompanyResponse,
    } as MsgDeleteCompanyResponse;
    return message;
  },

  toJSON(_: MsgDeleteCompanyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteCompanyResponse>
  ): MsgDeleteCompanyResponse {
    const message = {
      ...baseMsgDeleteCompanyResponse,
    } as MsgDeleteCompanyResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateCV(request: MsgCreateCV): Promise<MsgCreateCVResponse>;
  UpdateCV(request: MsgUpdateCV): Promise<MsgUpdateCVResponse>;
  ConfirmCV(request: MsgConfirmCV): Promise<MsgConfirmCVResponse>;
  CreateCompanyWorkedIn(
    request: MsgCreateCompanyWorkedIn
  ): Promise<MsgCreateCompanyWorkedInResponse>;
  UpdateCompanyWorkedIn(
    request: MsgUpdateCompanyWorkedIn
  ): Promise<MsgUpdateCompanyWorkedInResponse>;
  DeleteCompanyWorkedIn(
    request: MsgDeleteCompanyWorkedIn
  ): Promise<MsgDeleteCompanyWorkedInResponse>;
  CreateCompany(request: MsgCreateCompany): Promise<MsgCreateCompanyResponse>;
  UpdateCompany(request: MsgUpdateCompany): Promise<MsgUpdateCompanyResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteCompany(request: MsgDeleteCompany): Promise<MsgDeleteCompanyResponse>;
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

  CreateCompanyWorkedIn(
    request: MsgCreateCompanyWorkedIn
  ): Promise<MsgCreateCompanyWorkedInResponse> {
    const data = MsgCreateCompanyWorkedIn.encode(request).finish();
    const promise = this.rpc.request(
      "alexs778.cvproject.cvproject.Msg",
      "CreateCompanyWorkedIn",
      data
    );
    return promise.then((data) =>
      MsgCreateCompanyWorkedInResponse.decode(new Reader(data))
    );
  }

  UpdateCompanyWorkedIn(
    request: MsgUpdateCompanyWorkedIn
  ): Promise<MsgUpdateCompanyWorkedInResponse> {
    const data = MsgUpdateCompanyWorkedIn.encode(request).finish();
    const promise = this.rpc.request(
      "alexs778.cvproject.cvproject.Msg",
      "UpdateCompanyWorkedIn",
      data
    );
    return promise.then((data) =>
      MsgUpdateCompanyWorkedInResponse.decode(new Reader(data))
    );
  }

  DeleteCompanyWorkedIn(
    request: MsgDeleteCompanyWorkedIn
  ): Promise<MsgDeleteCompanyWorkedInResponse> {
    const data = MsgDeleteCompanyWorkedIn.encode(request).finish();
    const promise = this.rpc.request(
      "alexs778.cvproject.cvproject.Msg",
      "DeleteCompanyWorkedIn",
      data
    );
    return promise.then((data) =>
      MsgDeleteCompanyWorkedInResponse.decode(new Reader(data))
    );
  }

  CreateCompany(request: MsgCreateCompany): Promise<MsgCreateCompanyResponse> {
    const data = MsgCreateCompany.encode(request).finish();
    const promise = this.rpc.request(
      "alexs778.cvproject.cvproject.Msg",
      "CreateCompany",
      data
    );
    return promise.then((data) =>
      MsgCreateCompanyResponse.decode(new Reader(data))
    );
  }

  UpdateCompany(request: MsgUpdateCompany): Promise<MsgUpdateCompanyResponse> {
    const data = MsgUpdateCompany.encode(request).finish();
    const promise = this.rpc.request(
      "alexs778.cvproject.cvproject.Msg",
      "UpdateCompany",
      data
    );
    return promise.then((data) =>
      MsgUpdateCompanyResponse.decode(new Reader(data))
    );
  }

  DeleteCompany(request: MsgDeleteCompany): Promise<MsgDeleteCompanyResponse> {
    const data = MsgDeleteCompany.encode(request).finish();
    const promise = this.rpc.request(
      "alexs778.cvproject.cvproject.Msg",
      "DeleteCompany",
      data
    );
    return promise.then((data) =>
      MsgDeleteCompanyResponse.decode(new Reader(data))
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
