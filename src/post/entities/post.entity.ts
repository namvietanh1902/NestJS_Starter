import { User } from "../../users/entities/user.entity";
import {Comment} from '../../comments/entities/comment.entity'
import {Entity,Column,PrimaryGeneratedColumn, ManyToOne, OneToMany} from "typeorm"
@Entity()
export class Post {
    @PrimaryGeneratedColumn() 
    id:number ;
    @Column() 
    title:string ;
    @Column()
    content: string;
    @ManyToOne(() => User, (user) => user.posts)
    user: User
    @OneToMany(()=>Comment, (comment) => comment.post)
    comments: Comment[] ;
}
