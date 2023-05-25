import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from '../users.schema';
import { UserRequestDto } from '../dto/users.request.dto';
import { UsersRepository } from '../users.repository';
import { UpdateUserDto } from '../dto/update.user.dto';



@Injectable()
export class UsersService {
  

  constructor(private readonly usersRepository: UsersRepository,
               @InjectModel(User.name) private readonly userModel: Model < User > ) {}

  async getAllUser() {
    const allUser = await this.usersRepository.findAll();
    const readOnlyUsers = allUser.map((user) => user.readOnlyData);
    return readOnlyUsers;
  }

  async signUp(body: UserRequestDto) {
    const { email, nickname, password } = body;
    const isUserExist = await this.usersRepository.existsByEmail(email);
    if (isUserExist) {
      throw new UnauthorizedException('해당하는 email은 이미 존재합니다.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.usersRepository.create({
      email,
      nickname,
      password: hashedPassword,
    });

    return user.readOnlyData;
  }

async findOne(id: string) {
  return this.userModel.findById(id);
}

async update(id: string, updateUserDto: UpdateUserDto): Promise < User > {
  return this.userModel.findByIdAndUpdate(id, updateUserDto);
}

async remove(id: string) {
  return this.userModel.findByIdAndRemove(id);
}

}
