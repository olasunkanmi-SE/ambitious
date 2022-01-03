
import { AppService } from "./app.service";


export class appHandler{
    constructor(private readonly appService:AppService){
    }
    getHello(): string {
        return this.appService.getHello();
      }
}