/* eslint-disable */
import { CompanyWorkedIn } from "../cvproject/company_worked_in";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "alexs778.cvproject.cvproject";

export interface CV {
  name: string;
  education: string;
  summary: string;
  skills: string;
  experience: string;
  creator: string;
  CompaniesUUID: string[];
}

export interface CvForResponse {
  name: string;
  education: string;
  summary: string;
  skills: string;
  experience: string;
  creator: string;
  Companies: CompanyWorkedIn[];
}

const baseCV: object = {
  name: "",
  education: "",
  summary: "",
  skills: "",
  experience: "",
  creator: "",
  CompaniesUUID: "",
};

export const CV = {
  encode(message: CV, writer: Writer = Writer.create()): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.education !== "") {
      writer.uint32(18).string(message.education);
    }
    if (message.summary !== "") {
      writer.uint32(26).string(message.summary);
    }
    if (message.skills !== "") {
      writer.uint32(34).string(message.skills);
    }
    if (message.experience !== "") {
      writer.uint32(42).string(message.experience);
    }
    if (message.creator !== "") {
      writer.uint32(50).string(message.creator);
    }
    for (const v of message.CompaniesUUID) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CV {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCV } as CV;
    message.CompaniesUUID = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.education = reader.string();
          break;
        case 3:
          message.summary = reader.string();
          break;
        case 4:
          message.skills = reader.string();
          break;
        case 5:
          message.experience = reader.string();
          break;
        case 6:
          message.creator = reader.string();
          break;
        case 7:
          message.CompaniesUUID.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CV {
    const message = { ...baseCV } as CV;
    message.CompaniesUUID = [];
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.CompaniesUUID !== undefined && object.CompaniesUUID !== null) {
      for (const e of object.CompaniesUUID) {
        message.CompaniesUUID.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: CV): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.education !== undefined && (obj.education = message.education);
    message.summary !== undefined && (obj.summary = message.summary);
    message.skills !== undefined && (obj.skills = message.skills);
    message.experience !== undefined && (obj.experience = message.experience);
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.CompaniesUUID) {
      obj.CompaniesUUID = message.CompaniesUUID.map((e) => e);
    } else {
      obj.CompaniesUUID = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<CV>): CV {
    const message = { ...baseCV } as CV;
    message.CompaniesUUID = [];
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.CompaniesUUID !== undefined && object.CompaniesUUID !== null) {
      for (const e of object.CompaniesUUID) {
        message.CompaniesUUID.push(e);
      }
    }
    return message;
  },
};

const baseCvForResponse: object = {
  name: "",
  education: "",
  summary: "",
  skills: "",
  experience: "",
  creator: "",
};

export const CvForResponse = {
  encode(message: CvForResponse, writer: Writer = Writer.create()): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.education !== "") {
      writer.uint32(18).string(message.education);
    }
    if (message.summary !== "") {
      writer.uint32(26).string(message.summary);
    }
    if (message.skills !== "") {
      writer.uint32(34).string(message.skills);
    }
    if (message.experience !== "") {
      writer.uint32(42).string(message.experience);
    }
    if (message.creator !== "") {
      writer.uint32(50).string(message.creator);
    }
    for (const v of message.Companies) {
      CompanyWorkedIn.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CvForResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCvForResponse } as CvForResponse;
    message.Companies = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.education = reader.string();
          break;
        case 3:
          message.summary = reader.string();
          break;
        case 4:
          message.skills = reader.string();
          break;
        case 5:
          message.experience = reader.string();
          break;
        case 6:
          message.creator = reader.string();
          break;
        case 7:
          message.Companies.push(
            CompanyWorkedIn.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CvForResponse {
    const message = { ...baseCvForResponse } as CvForResponse;
    message.Companies = [];
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.Companies !== undefined && object.Companies !== null) {
      for (const e of object.Companies) {
        message.Companies.push(CompanyWorkedIn.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: CvForResponse): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.education !== undefined && (obj.education = message.education);
    message.summary !== undefined && (obj.summary = message.summary);
    message.skills !== undefined && (obj.skills = message.skills);
    message.experience !== undefined && (obj.experience = message.experience);
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.Companies) {
      obj.Companies = message.Companies.map((e) =>
        e ? CompanyWorkedIn.toJSON(e) : undefined
      );
    } else {
      obj.Companies = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<CvForResponse>): CvForResponse {
    const message = { ...baseCvForResponse } as CvForResponse;
    message.Companies = [];
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.Companies !== undefined && object.Companies !== null) {
      for (const e of object.Companies) {
        message.Companies.push(CompanyWorkedIn.fromPartial(e));
      }
    }
    return message;
  },
};

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
