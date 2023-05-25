import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { ExpertsCreateDto } from '../dto/experts.create.dto';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { ExpertsService } from '../services/experts.service';
import { ExpertsUpdateDto } from '../dto/experts.update.dto';
import { BadRequestExceptionFilter } from '../bad-request-exception.filter';

@ApiTags('experts')
@ApiBearerAuth()
@Controller('experts')
@UseGuards(JwtAuthGuard)
@UseFilters(BadRequestExceptionFilter)
export class ExpertsController {
  constructor(private readonly expertsService: ExpertsService) {}

  @ApiOperation({ summary: '전문가에게 첨삭받기 등록' })
  @Post()
  async createPost(
    @Body() expertCreateDto: ExpertsCreateDto,
    @CurrentUser() userInfo,
  ) {
    const author = userInfo._id;
    expertCreateDto.author = author;
    return await this.expertsService.createPost(expertCreateDto);
  }

  @ApiOperation({ summary: '내 자기소개서 전체 목록' })
  @Get()
  async getAllPost(@CurrentUser() userInfo) {
    const userId = userInfo._id;
    const role = userInfo.role;
    return await this.expertsService.getAllPost(userId, role);
  }

  @ApiOperation({ summary: '내 자기소개서 상세 내용' })
  @Get(':id')
  async getPostById(@Param('id') postId: string, @CurrentUser() userInfo) {
    const userId = userInfo._id;
    return await this.expertsService.getPostById(postId, userId);
  }

  @ApiOperation({ summary: '내 자기소개서 수정' })
  @Patch(':id')
  async updatePost(
    @Param('id') postId: string,
    @Body() updatePostData: ExpertsUpdateDto,
    @CurrentUser() userInfo,
  ) {
    const userId = userInfo._id;
    return await this.expertsService.updatePost(postId, updatePostData, userId);
  }

  @ApiOperation({ summary: '내 자기소개서 1건 삭제' })
  @Delete(':id')
  async deletePostById(@Param('id') postId: string, @CurrentUser() userInfo) {
    const userId = userInfo._id;
    return await this.expertsService.deletePostById(postId, userId);
  }

  @ApiOperation({ summary: '내 자기소개서 전체 삭제' })
  @Delete()
  async deleteAllPost(@CurrentUser() userInfo) {
    const userId = userInfo._id;
    return await this.expertsService.deleteAllPost(userId);
  }
}
