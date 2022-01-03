import { Controller, Get, Inject } from '@nestjs/common';
import { IAppService } from './app_service_interface';

@Controller('/app')
export class AppController {
  constructor(@Inject('IAppService') private readonly appService: IAppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('bye')
  sayBye():string[]{
    return this.appService.sayBye();
  }

}
