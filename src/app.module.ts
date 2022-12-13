import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {InjectDataSource, TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post/entities/post.entity';
import { PostModule } from './post/post.module';
import {DataSource} from 'typeorm';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    PostModule,
    UsersModule
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
