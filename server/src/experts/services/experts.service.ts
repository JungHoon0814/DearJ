import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ExpertsRepository } from '../experts.repository';
import { ExpertsCreateDto } from '../dto/experts.create.dto';
import { ExpertsUpdateDto } from '../dto/experts.update.dto';

@Injectable()
export class ExpertsService {
  constructor(private readonly expertRepository: ExpertsRepository) {}

  async createPost(postData: ExpertsCreateDto) {
    return await this.expertRepository.createPost(postData);
  }

  async getAllPost(userId, role) {
    if (role === 'expert' || role === 'admin') {
      return await this.expertRepository.findAll();
    }
    return await this.expertRepository.findAllByAuthor(userId);
  }

  async getPostById(postId: string, userId) {
    const author = (await this.expertRepository.findByPostId(postId)).author;

    if (!author.equals(userId)) {
      throw new UnauthorizedException('조회 권한이 없습니다.');
    }
    return await this.expertRepository.findByPostId(postId);
  }

  async updatePost(postId: string, updatePostData: ExpertsUpdateDto, userId) {
    await this.checkPostAndAuthorization(postId, userId);
    const setPostData = await this.expertRepository.updateByPostId(
      postId,
      updatePostData,
    );

    // 첨삭 재요청으로 status 변경
    await this.expertRepository.updateStatusToIng(postId);
    return setPostData;
  }

  async deletePostById(postId: string, userId) {
    await this.checkPostAndAuthorization(postId, userId);
    return await this.expertRepository.deleteByPostId(postId);
  }

  async deleteAllPost(userId) {
    return await this.expertRepository.deleteAll(userId);
  }

  // 자기소개서 DB & 작성자 체크
  private async checkPostAndAuthorization(postId, userId): Promise<void> {
    const postData = await this.expertRepository.findByPostId(postId);
    const author = postData.author;
    if (!postData) {
      throw new NotFoundException('자기소개서가 존재하지 않습니다.');
    }
    if (!author.equals(userId)) {
      throw new UnauthorizedException('권한이 없습니다.');
    }
  }
}
