import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './models/user.model';

@Injectable()
export class UserServiceService {
  constructor(
    @InjectConnection('development') private readonly sequelize: Sequelize,
    @InjectModel(User, 'development') private readonly userModel: typeof User
  ) {}

  async findAll(): Promise<User[]> {
    let result = await this.userModel.findAll()
    // this.sequelize.close();  optional or you can manage it
    return result;
  }

  async create( createUserDto:CreateUserDto):Promise<User> {
    let result =  await this.userModel.create(<User>createUserDto);
    this.sequelize.close();
    return result;
  }
}