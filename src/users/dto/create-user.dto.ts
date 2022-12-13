import { Post } from "../../post/entities/post.entity";
import { IsEmail,isString, MinLength } from "class-validator";
import { Min } from "class-validator";
export class CreateUserDto {
    @IsEmail()
    username: string;
    @MinLength(6)
    password: string;
    name: string;
    address: string;
    role: string;
    posts: Post[];
    
}
