import { Post } from "../../post/entities/post.entity";

export class CreateUserDto {
    username: string;
    password: string;
    name: string;
    address: string;
    role: string;
    posts: Post[];
    
}
