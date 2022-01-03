import { Injectable } from "@nestjs/common";

@Injectable()
export class AppSqlRepo{
    getSomethingFromDB():string[]{
        return ['a', 'b'];
    }

}