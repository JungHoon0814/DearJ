import { PickType } from '@nestjs/swagger';
import { User } from '../users.schema';

export class UpdateUserDto extends PickType(User, [
  'nickname',
] as const) {}
