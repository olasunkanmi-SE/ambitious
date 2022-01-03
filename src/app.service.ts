import { Inject, Injectable } from '@nestjs/common';
import { IAppService } from './app_service_interface';
import { IAppSqlRepo } from './app_sql_repo_interface';

@Injectable()
export class AppService implements IAppService {
  constructor(@Inject('IAppSqlRepo') private readonly appSql:IAppSqlRepo){}
  getHello(): string {
    return 'Hello World!';
  }

  sayBye(): string[] {
      return this.appSql.getSomethingFromDB();
  }
}
