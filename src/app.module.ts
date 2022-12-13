import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from './post/post.module';

import { UsersModule } from './users/users.module';
import {config} from './database/ormconfig'
import { CommentsModule } from './comments/comments.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    PostModule,
    UsersModule,
    CommentsModule
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
