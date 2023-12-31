// Code generated by ProtoKitGo. DO NOT EDIT.
// package: netutils
// file: netutils/packet.proto

import * as jspb from "google-protobuf";
// Code generated by protokitgo. DO NOT EDIT.
export class RawPacket extends jspb.Message {

	getVersion(): number;
  	setVersion(value: number): void;


	getSequenceid(): number;
  	setSequenceid(value: number): void;


	clearMetadataList(): void;
	getMetadataList(): Array<string>;
	setMetadataList(value: Array<string>): void;
	addMetadata(value: string, index?: number): string;


	clearRawanyList(): void;
	getRawanyList(): Array<RawAny>;
	setRawanyList(value: Array<RawAny>): void;
	addRawany(value: RawAny, index?: number): RawAny;


	getReservedint1(): number;
  	setReservedint1(value: number): void;


	getReservedint2(): number;
  	setReservedint2(value: number): void;


	getReservedstr1(): string;
  	setReservedstr1(value: string): void;


	getReservedstr2(): string;
  	setReservedstr2(value: string): void;


	getReservedbytes1(): string;
  	setReservedbytes1(value: string): void;


	getReservedbytes2(): string;
  	setReservedbytes2(value: string): void;

	serializeBinary(): Uint8Array;
  	toObject(includeInstance?: boolean): RawPacket.AsObject;
  	static toObject(includeInstance: boolean, msg: RawPacket): RawPacket.AsObject;
  	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  	static serializeBinaryToWriter(message: RawPacket, writer: jspb.BinaryWriter): void;
  	static deserializeBinary(bytes: Uint8Array): RawPacket;
  	static deserializeBinaryFromReader(message: RawPacket, reader: jspb.BinaryReader): RawPacket;
}

export namespace RawPacket {
  	export type AsObject = {
    	version: number,
    	sequenceid: number,
		metadataList: Array<string>,
		rawanyList: Array<RawAny.AsObject>,
    	reservedint1: number,
    	reservedint2: number,
    	reservedstr1: string,
    	reservedstr2: string,
    	reservedbytes1: string,
    	reservedbytes2: string,
   	}
}
// Code generated by protokitgo. DO NOT EDIT.
export class RawAny extends jspb.Message {

	getUri(): string;
  	setUri(value: string): void;


	getRaw(): string;
  	setRaw(value: string): void;


	getPassthrough(): string;
  	setPassthrough(value: string): void;

	serializeBinary(): Uint8Array;
  	toObject(includeInstance?: boolean): RawAny.AsObject;
  	static toObject(includeInstance: boolean, msg: RawAny): RawAny.AsObject;
  	static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  	static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  	static serializeBinaryToWriter(message: RawAny, writer: jspb.BinaryWriter): void;
  	static deserializeBinary(bytes: Uint8Array): RawAny;
  	static deserializeBinaryFromReader(message: RawAny, reader: jspb.BinaryReader): RawAny;
}

export namespace RawAny {
  	export type AsObject = {
    	uri: string,
    	raw: string,
    	passthrough: string,
   	}
}

