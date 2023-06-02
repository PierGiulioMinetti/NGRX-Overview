import { Injectable } from "@angular/core";
import { GenericService } from "src/app/services/generic.service";
import { UrlEnum } from "src/app/url.enum";

@Injectable()
export class CustomerEffectClass {
    constructor(private generiService: GenericService){

    }

getRes<Customer> (){
    this.generiService.getData(UrlEnum.CUSTOMERS).subscribe((res)=>console.log(res));
    
}


}