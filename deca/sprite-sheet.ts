// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { Sprite } from '../deca/sprite.js';


export class SpriteSheet {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):SpriteSheet {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsSpriteSheet(bb:flatbuffers.ByteBuffer, obj?:SpriteSheet):SpriteSheet {
  return (obj || new SpriteSheet()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsSpriteSheet(bb:flatbuffers.ByteBuffer, obj?:SpriteSheet):SpriteSheet {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new SpriteSheet()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

name():string|null
name(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
name(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

atlasId():bigint {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readUint64(this.bb_pos + offset) : BigInt('0');
}

sprites(index: number, obj?:Sprite):Sprite|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new Sprite()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

spritesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startSpriteSheet(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static addName(builder:flatbuffers.Builder, nameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, nameOffset, 0);
}

static addAtlasId(builder:flatbuffers.Builder, atlasId:bigint) {
  builder.addFieldInt64(1, atlasId, BigInt('0'));
}

static addSprites(builder:flatbuffers.Builder, spritesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, spritesOffset, 0);
}

static createSpritesVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startSpritesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endSpriteSheet(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createSpriteSheet(builder:flatbuffers.Builder, nameOffset:flatbuffers.Offset, atlasId:bigint, spritesOffset:flatbuffers.Offset):flatbuffers.Offset {
  SpriteSheet.startSpriteSheet(builder);
  SpriteSheet.addName(builder, nameOffset);
  SpriteSheet.addAtlasId(builder, atlasId);
  SpriteSheet.addSprites(builder, spritesOffset);
  return SpriteSheet.endSpriteSheet(builder);
}
}