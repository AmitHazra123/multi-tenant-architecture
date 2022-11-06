import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SequelizeConfigService } from 'apps/config/sequelizeconfigservice';
import { UserConfigModule } from './config/user-config.module';
import { User } from './models/user.model';
import { UserServiceController } from './user-service.controller';
import { UserServiceService } from './user-service.service';

@Module({
  imports: [
    // SequelizeModule.forRootAsync({
    //   name: 'development',
    //   useClass: SequelizeConfigService
    // }),
    // SequelizeModule.forRootAsync({
    //   imports: [UserConfigModule],
    //   useExisting: SequelizeConfigService
    // }),
    SequelizeModule.forRootAsync({
      imports: [UserConfigModule],
      name: 'development',
      useExisting: SequelizeConfigService
    }),
    SequelizeModule.forFeature([User], 'development')
  ],
  controllers: [UserServiceController],
  providers: [UserServiceService]
})
export class UserServiceModule {}
