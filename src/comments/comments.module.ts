import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { PostModule } from '../post/post.module';
import { UsersModule } from '../users/users.module';


@Module({
  imports: [TypeOrmModule.forFeature([Comment]),UsersModule,PostModule],
  controllers: [CommentsController],
  providers: [CommentsService],
  
})
export class CommentsModule {}
