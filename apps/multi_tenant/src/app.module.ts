import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SequelizeModule } from '@nestjs/sequelize';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseConfigService } from '../../config/mongooseconfigservice';
import { SequelizeConfigService } from '../../config/sequelizeconfigservice';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NOTIFY_SERVICE',
        transport: Transport.REDIS,
        options: {
          host: 'localhost',
          port: 6379
        },
      },
    ]),
    SequelizeModule.forRootAsync({
      useClass: SequelizeConfigService
    }),
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
