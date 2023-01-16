import { Injectable } from '@nestjs/common';
import { CommentsCreateDto } from '../dtos/comments.create.dto';

@Injectable()
export class CommentsService {
  async getAllComments() {
    return "hello~"
  }

  async createComment(id: string, comments: CommentsCreateDto) {
    return "helllo world";
  }

  async plusLike(id: string) {
    return "plus Like";
  }
}
