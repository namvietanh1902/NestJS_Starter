import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {Repository} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>
  ){}
  create(createPostDto: CreatePostDto):Promise<Post> {
    const post:Post = this.postRepository.create(createPostDto);
    return this.postRepository.save(post);
  }

  findAll() :Promise<Post[]> {
    return this.postRepository.find();
  }

  findOne(id: number):Promise<Post> {
    return this.postRepository.findOneBy({id});
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  async remove(id: number):Promise<void> {
    await this.postRepository.delete(id);
  }
}
