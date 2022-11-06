import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('NOTIFY_SERVICE') private readonly client: ClientProxy){}

  async getHello(): Promise<string> {
    console.log("send");
    let recieve= await this.client.send<number>("notify",{user:"Ali",data:{a:1,b:2}}).toPromise();// notify if mapped key will used to in other hand 
    return "\t add 1+2="+recieve;
  }
}
