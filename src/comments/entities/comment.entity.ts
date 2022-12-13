import { Post } from "../../post/entities/post.entity";
import { User } from "../../users/entities/user.entity";
import { Column,Entity,ManyToOne,PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    content:string;
    @Column()
    @ManyToOne(()=>User,(user:User)=>user.comments)
    user:User;
    @ManyToOne(()=>Post,(post:Post)=>post.comments)
    post:Post;
}
