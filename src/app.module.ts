import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppSqlRepo } from './app_sql_repo';
@Module({
  imports: [],
  controllers: [AppController],
  providers: [{provide:'IAppService', useClass:AppService},{provide:'IAppSqlRepo', useClass:AppSqlRepo}],
})
export class AppModule {
}
