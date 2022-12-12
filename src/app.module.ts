import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post/entities/post.entity';
import { PostModule } from './post/post.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest_starter',
      entities: [Post],
      migrations: [],
      synchronize: true,
    }),
    PostModule
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
