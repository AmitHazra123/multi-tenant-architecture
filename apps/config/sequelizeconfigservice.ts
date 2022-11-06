import { Inject, Injectable, Scope } from "@nestjs/common";
import { REQUEST } from "@nestjs/core";
import { RequestContext } from "@nestjs/microservices";
import { SequelizeModuleOptions, SequelizeOptionsFactory } from "@nestjs/sequelize";

@Injectable({ scope: Scope.REQUEST })
export class SequelizeConfigService implements SequelizeOptionsFactory {
  constructor(@Inject(REQUEST) private readonly request: RequestContext) { }

  createSequelizeOptions(): SequelizeModuleOptions {
    let domains: string[];
    let database = 'database_development';
    if (this.request.data) {
      domains = this.request.data['host'].split('.');
      console.log(this.request);
    } else {
      domains = this.request['headers']['host'].split('.');
    }

    console.log(domains);

    if (domains[0] !== '127' && domains[0] !== 'www' && domains.length > 2) {
      database = 'tenant_' + domains[0];
      console.log('current DB', database);
    }

    return {
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root123',
      database: database,
      autoLoadModels: true,
      synchronize: true,
    };
  }
}