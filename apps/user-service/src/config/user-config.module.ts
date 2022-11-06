import { Module } from "@nestjs/common";
import { SequelizeConfigService } from "apps/config/sequelizeconfigservice";

@Module({
  providers: [SequelizeConfigService],
  exports: [SequelizeConfigService]
})

export class UserConfigModule {}