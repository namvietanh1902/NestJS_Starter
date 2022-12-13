import { Post } from '../../post/entities/post.entity';
import {Comment} from '../../comments/entities/comment.entity'
import {PrimaryGeneratedColumn,Column,Entity, OneToMany} from 'typeorm'
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    username: string;
    @Column()
    password: string;
    @Column()
    name: string;
    @Column()
    address: string;
    @Column()
    Role: string;
    @OneToMany(()=>Post,(post)=>post.user)
    posts: Post[];
    @OneToMany(()=>Comment,(comment)=>comment.user)
    comments: Comment[];
}
