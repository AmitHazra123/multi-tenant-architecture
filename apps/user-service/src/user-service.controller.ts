import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserServiceService } from './user-service.service';

@Controller('users')
export class UserServiceController {
  constructor(private readonly userServiceService: UserServiceService) {}

  @Get()
  async findAll(){
      return this.userServiceService.findAll();
  }

  @Post()
  async createUser(@Body() createUserDto:CreateUserDto){
    return  this.userServiceService.create(createUserDto)
  }
}
