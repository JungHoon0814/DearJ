import { PartialType, PickType } from '@nestjs/swagger';
import { Expert } from '../experts.schema';
import { Types } from 'mongoose';

export class ExpertsCreateDto extends PartialType(
  PickType(Expert, ['title', 'content'] as const),
) {
  author?;
  company?: string;
  job?: string;
}

export class ExpertDto {
  title: string;
  content: string;
  author: Types.ObjectId;
  company?: string;
  job?: string;
}
