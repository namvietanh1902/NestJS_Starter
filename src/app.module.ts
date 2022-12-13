import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {InjectDataSource, TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post/entities/post.entity';
import { PostModule } from './post/post.module';
import {DataSource} from 'typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import {config} from './config/ormconfig'


@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    PostModule,
    UsersModule
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
