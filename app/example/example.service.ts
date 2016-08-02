import {Injectable} from "@angular/core"
import {Http} from '@angular/http';

@Injectable()
export class ExampleService {
   endpoint_url:String = 'example_endpoint.url';
    http;

   constructor(http: Http){
       this.http = http;
   }
 
   getExample (user:String){
        return this.http.get(this.endpoint_url).map(res => res.json());
   }
}