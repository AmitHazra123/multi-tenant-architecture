import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message, MessageDocument } from './schema/message.schema';

@Injectable()
export class MessageService {
    constructor(@InjectModel(Message.name) private readonly messageModel: Model<MessageDocument>) {}
    
    async findAll (): Promise<Message[]> {
        return await this.messageModel.find().exec();
    }
    
    async create (createMessageDto: CreateMessageDto): Promise<Message> {
        const createdMessage = new this.messageModel(createMessageDto);
        return await createdMessage.save();
    }
}