import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { UserServiceModule } from './user-service.module';

async function bootstrap() {
  const app = await NestFactory.create(UserServiceModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport:Transport.REDIS,
    options:{
      host:'localhost',
      port: 6379
    },
  });
  await app.startAllMicroservices();
  
  await app.listen(3002);
}
bootstrap();
