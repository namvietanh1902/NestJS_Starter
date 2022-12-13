import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ){
  }
  create(createUserDto: CreateUserDto) : Promise<User>{
    return this.userRepository.save(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find({
      relations:['posts']
    });
  }

  findOne(id: number):Promise<User> {
    return this.userRepository.findOne({
      relations:['posts'],
      where:{ id}
    });
  }

  update(id: number, updateUserDto: UpdateUserDto){
    let user = this.userRepository.findOne({where:{id}});
    return this.userRepository.update({id:updateUserDto.id},updateUserDto);
    
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
