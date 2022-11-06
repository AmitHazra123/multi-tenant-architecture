import { Inject, Injectable, Scope } from "@nestjs/common";
import { REQUEST } from "@nestjs/core";
import { RequestContext } from "@nestjs/microservices";
import { MongooseModuleOptions, MongooseOptionsFactory } from "@nestjs/mongoose";

@Injectable({ scope: Scope.REQUEST })
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(@Inject(REQUEST) private readonly request: RequestContext) { }

  createMongooseOptions(): MongooseModuleOptions {
    let domains: string[];
    let database = 'database_development';
    if (this.request.data) {
      domains = this.request.data['host'].split('.');
      console.log(this.request)
    }
    else {
      domains = this.request['headers']['host'].split('.');
    }

    console.log(domains);

    if (domains[0] !== '127' && domains[0] !== 'www' && domains.length > 2) {
      database = 'tenant_' + domains[0];
      console.log('current DB', database);
    }
    return {
      uri: 'mongodb://localhost:27017/' + database
    };
  }
}