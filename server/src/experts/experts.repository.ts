import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Expert } from './experts.schema';
import { ExpertsCreateDto } from './dto/experts.create.dto';
import { ExpertsUpdateDto } from './dto/experts.update.dto';

@Injectable()
export class ExpertsRepository {
  constructor(@InjectModel(Expert.name) private expertModel: Model<Expert>) {}

  async createPost(postData: ExpertsCreateDto) {
    return await this.expertModel.create(postData);
  }

  async findAll() {
    return await this.expertModel.find();
  }

  async findAllByAuthor(userId) {
    return await this.expertModel
      .find({ author: userId })
      .populate('commentid', 'comment');
  }

  async findByPostId(postId: string) {
    return await (
      await this.expertModel.findById({ _id: postId })
    ).populate('commentid', 'comment');
  }

  async updateByPostId(postId: string, updatePostData: ExpertsUpdateDto) {
    return await this.expertModel.findOneAndUpdate(
      { _id: postId },
      { $set: updatePostData },
      { new: true },
    );
  }

  async updateStatusToDone(dto) {
    const { content: id } = dto;
    return await this.expertModel.findOneAndUpdate(
      { _id: id },
      { status: 'done' },
    );
  }

  async updateStatusToIng(postId) {
    return await this.expertModel.findOneAndUpdate(
      { _id: postId },
      { status: 'ing' },
    );
  }

  async addCommentToContent(postId, createdCommentId) {
    await this.expertModel.findById(postId);
    const newCommentId = new mongoose.Types.ObjectId(createdCommentId);

    return await this.expertModel.findOneAndUpdate(
      { _id: postId },
      { $push: { commentid: newCommentId } },
      { upsert: true },
    );
  }

  async deleteByPostId(postId) {
    return await this.expertModel.deleteOne({ _id: postId });
  }

  async deleteAll(userId) {
    const result = await this.expertModel.deleteMany({ author: userId });
    if (result.deletedCount === 0) {
      throw new NotFoundException('작성된 자기소개서가 없습니다.');
    }
    return result.deletedCount;
  }
}
