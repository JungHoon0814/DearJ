import {
  Param,
  Body,
  UseFilters,
  UseGuards,
  UseInterceptors,
  Patch,
} from '@nestjs/common';
import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { UsersService } from '../services/users.service';
import { UserRequestDto } from '../dto/users.request.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ReadOnlyUserDto } from '../dto/user.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { User } from '../users.schema';
import { UpdateUserDto } from '../dto/update.user.dto';

@ApiTags('users')
@Controller('users')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiResponse({
    status: 500,
    description: 'Server Error...',
  })
  @ApiResponse({
    status: 200,
    description: '성공!',
    type: ReadOnlyUserDto,
  })
  @ApiOperation({ summary: '회원가입(signup)' })
  @Post('signup')
  async signUp(@Body() body: UserRequestDto) {
    return await this.usersService.signUp(body);
  }

  @ApiOperation({ summary: '전체 유저 조회' })
  @Get('all')
  getAllUser() {
    return this.usersService.getAllUser();
  }

  @ApiOperation({ summary: '특정 유저 조회' })
  @UseGuards(JwtAuthGuard)
  @Get('')
  findOne(@CurrentUser() userInfo) {
    const userId = userInfo._id;
    return this.usersService.findOne(userId);
  }
  @ApiOperation({ summary: '특정 유저 nickname 수정' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @ApiOperation({ summary: '특정 유저 삭제(탈퇴)' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
