import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type MessageDocument = Message & Document<Message>;

@Schema()
export class Message {
  @Prop()
  name: string;

  @Prop()
  createdAt: Date;

  @Prop({type:mongoose.Schema.Types.Mixed})
  data: Record<string, any>;
}

export const MessageSchema = SchemaFactory.createForClass(Message);