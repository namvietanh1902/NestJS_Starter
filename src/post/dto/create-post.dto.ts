import { User } from "../../users/entities/user.entity";

export class CreatePostDto {
    title: string;
    content: string;
    userId: number;
}
