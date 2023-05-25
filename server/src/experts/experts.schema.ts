import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Document, SchemaOptions, Types } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
  collection: 'experts',
};

@Schema(options)
export class Expert extends Document {
  @ApiProperty({
    example: '지원자 OOO 입니다.',
    description: '자기소개서 제목',
    required: true,
  })
  @Prop({ required: true })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    example: '안녕하세요. 잘 부탁드립니다.',
    description: '자기소개서 본문',
    required: true,
  })
  @Prop({
    required: true,
    maxlength: 5000,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(5000)
  content: string;

  @ApiProperty({ description: '지원(희망)하는 회사' })
  @Prop()
  @IsString()
  company?: string;

  @ApiProperty({ description: '지원(희망)하는 직무' })
  @Prop()
  @IsString()
  job?: string;

  @ApiProperty({ description: '자기소개서 작성자' })
  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: 'User',
  })
  author: Types.ObjectId;

  @ApiProperty({ description: '첨삭 진행상태' })
  @Prop({
    type: String,
    enum: ['ing', 'done'],
    default: 'ing',
  })
  @IsString()
  status: string;

  @ApiProperty({ description: '전문가 첨삭 내용' })
  @Prop({
    ref: 'Comment',
  })
  commentid: Types.ObjectId[];
}

export const ExpertSchema = SchemaFactory.createForClass(Expert);
