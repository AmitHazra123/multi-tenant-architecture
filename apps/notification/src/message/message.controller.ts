import { Controller, Get, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessageService } from './message.service';
import { Message } from './schema/message.schema';

@Controller('messages')
export class MessageController {
  constructor(private readonly messagenService: MessageService) {}

  @Get()
  async findAll(): Promise<Message[]> {
    return await this.messagenService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createMessageDto: CreateMessageDto): Promise<Message> {
    return await this.messagenService.create(createMessageDto);
  }
}