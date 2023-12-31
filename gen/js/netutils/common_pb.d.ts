// Code generated by ProtoKitGo. DO NOT EDIT.
// package: netutils
// file: netutils/common.proto

import * as jspb from "google-protobuf";
// Code generated by protokitgo. DO NOT EDIT.
export class NormalAck extends jspb.Message {
	serializeBinary(): Uint8Array;
  	toObject(includeInstance?: boolean): NormalAck.AsObject;
  	static toObject(includeInstance: boolean, msg: NormalAck): NormalAck.AsObject;
  	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  	static serializeBinaryToWriter(message: NormalAck, writer: jspb.BinaryWriter): void;
  	static deserializeBinary(bytes: Uint8Array): NormalAck;
  	static deserializeBinaryFromReader(message: NormalAck, reader: jspb.BinaryReader): NormalAck;
}

export namespace NormalAck {
  	export type AsObject = {
   	}
}
// Code generated by protokitgo. DO NOT EDIT.
export class Empty extends jspb.Message {
	serializeBinary(): Uint8Array;
  	toObject(includeInstance?: boolean): Empty.AsObject;
  	static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  	static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  	static deserializeBinary(bytes: Uint8Array): Empty;
  	static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  	export type AsObject = {
   	}
}
// Code generated by protokitgo. DO NOT EDIT.
export class Ping extends jspb.Message {

	getTimestamp(): number;
  	setTimestamp(value: number): void;

	serializeBinary(): Uint8Array;
  	toObject(includeInstance?: boolean): Ping.AsObject;
  	static toObject(includeInstance: boolean, msg: Ping): Ping.AsObject;
  	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  	static serializeBinaryToWriter(message: Ping, writer: jspb.BinaryWriter): void;
  	static deserializeBinary(bytes: Uint8Array): Ping;
  	static deserializeBinaryFromReader(message: Ping, reader: jspb.BinaryReader): Ping;
}

export namespace Ping {
  	export type AsObject = {
    	timestamp: number,
   	}
}
// Code generated by protokitgo. DO NOT EDIT.
export class PingAck extends jspb.Message {

	getTimestamp(): number;
  	setTimestamp(value: number): void;

	serializeBinary(): Uint8Array;
  	toObject(includeInstance?: boolean): PingAck.AsObject;
  	static toObject(includeInstance: boolean, msg: PingAck): PingAck.AsObject;
  	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  	static serializeBinaryToWriter(message: PingAck, writer: jspb.BinaryWriter): void;
  	static deserializeBinary(bytes: Uint8Array): PingAck;
  	static deserializeBinaryFromReader(message: PingAck, reader: jspb.BinaryReader): PingAck;
}

export namespace PingAck {
  	export type AsObject = {
    	timestamp: number,
   	}
}
// Code generated by protokitgo. DO NOT EDIT.
export class ErrorResponse extends jspb.Message {

	getCode(): number;
  	setCode(value: number): void;


	getMessage(): string;
  	setMessage(value: string): void;


	getData(): string;
  	setData(value: string): void;


	getLogicexception(): boolean;
  	setLogicexception(value: boolean): void;

	serializeBinary(): Uint8Array;
  	toObject(includeInstance?: boolean): ErrorResponse.AsObject;
  	static toObject(includeInstance: boolean, msg: ErrorResponse): ErrorResponse.AsObject;
  	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  	static serializeBinaryToWriter(message: ErrorResponse, writer: jspb.BinaryWriter): void;
  	static deserializeBinary(bytes: Uint8Array): ErrorResponse;
  	static deserializeBinaryFromReader(message: ErrorResponse, reader: jspb.BinaryReader): ErrorResponse;
}

export namespace ErrorResponse {
  	export type AsObject = {
    	code: number,
    	message: string,
    	data: string,
    	logicexception: boolean,
   	}
}

export interface ErrorCodeMap {
  	OK: 0;
  	UNKNOWN: 1;
  	NOTIMPLEMENT: 2;
  	TIMEOUT: 3;
  	MESSAGECASTERROR: 4;
  	CANCELED: 5;
  	SEMVERCHECKERROR: 6;
  	INTERNALRSPEMPTY: 7;
  	TOKENCHECKERROR: 8;
  	PACKETTOOLARGE: 9;
  	RATELIMIT: 10;
  	DROP: 11;
  	ONEWAY: 12;
  	SERVERNOTFOUND: 13;
  	FORCEUPDATE: 14;
  	MAINTENANCE: 15;
  	PACKETPARSEDERROR: 16;
  	INVALIDPARAMETER: 17;
  	BADGATEWAY: 18;
}

export const ErrorCode: ErrorCodeMap;
export interface MetadataKeyMap {
  	INVALID: 0;
  	APPVERSION: 1;
  	LANGUAGE: 2;
  	CHANNEL: 3;
  	RESDATAVERSION: 10;
  	RESANDROIDVERSION: 11;
  	RESIOSVERSION: 12;
  	CLIENTID: 13;
}

export const MetadataKey: MetadataKeyMap;
