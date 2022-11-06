import { Controller, Get, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { NotifiyData } from './classes/notification.interface';
import { NotificationService } from './notification.service';

@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  getHello(): string {
    return this.notificationService.getHello();
  }

  @MessagePattern('notify')
  async notify(data:NotifiyData){
    console.log('receive')
    Logger.log("notification data "+data.user);
    let a:number=data.data['a'];
    let b:number=data.data['b'];
    console.log(a,b)
    return a+b;
  }
}
