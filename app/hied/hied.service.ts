import {Injectable} from "@angular/core"
import {Http} from '@angular/http';

//Another test

@Injectable()
export class HiedService {
   endpoint_url:String = 'http://hi/apps/HiTicketsApi/api/user';
    http;

   constructor(http: Http){
       this.http = http;
   }
 
   getHiedStuff (user:String){
        var a = this.http.get(this.endpoint_url).map(res => res.json());
        return this.http.get(this.endpoint_url).map(res => res.json());
   }
}