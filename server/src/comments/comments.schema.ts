import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { SchemaOptions, Types, Document } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
  collection: 'comments',
};

@Schema(options)
export class Comment extends Document {
  @ApiProperty({
    example: '피드백 입니다. 이 부분을 수정하면 보완할 수 있습니다.',
    description: '전문가 피드백',
    required: true,
  })
  @Prop({ required: true })
  @IsNotEmpty()
  @IsString()
  comment: string;

  @ApiProperty({
    description: '자기소개서 작성자',
  })
  @Prop({ ref: 'User' })
  author: Types.ObjectId;

  @ApiProperty({
    description: '자기소개서 내용',
  })
  @Prop({ ref: 'Expert' })
  content: Types.ObjectId;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
