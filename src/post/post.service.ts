import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {Repository} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from '../users/users.service'
@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
    private userService: UsersService,
  ){}
  async create(createPostDto: CreatePostDto):Promise<Post> {
    const post:Post = this.postRepository.create(createPostDto);
    const user = await this.userService.findOne(createPostDto.userId);
    post.user = user;
    console.log(post.user);
    return this.postRepository.save(post);
  }

  findAll() :Promise<Post[]> {
    return this.postRepository.find();
  }

  findOne(id: number):Promise<Post> {
    return this.postRepository.findOneBy({id});
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    let post = await this.postRepository.create(updatePostDto);
    const user = await this.userService.findOne(updatePostDto.userId);
    post.user = user;
    return this.postRepository.update({id},post)
  }

  async remove(id: number):Promise<void> {
    await this.postRepository.delete(id);
  }
}
