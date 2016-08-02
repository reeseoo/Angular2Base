import { Component } from '@angular/core';
import { HiedService } from './hied/hied.service'
import { HiedCount } from './hied/hiedCount';

@Component({
  selector: 'my-app',
  template: '<h1>{{title}}</h1> <p>hello there</p> <ul class="heroes"> <li *ngFor="let hied of hiedStuff">'+
            '<span class="badge">{{hied.id}}</span> {{hero.name}}' + 
            '</li> </ul>',
  providers: [HiedService]
})
export class AppComponent { 
    title: 'angularStuff';
    hiedStuff: Array<HiedCount>;

    constructor(private hiedService: HiedService){this.getHiedStuff();}

    getHiedStuff(){
      debugger;
      this.hiedStuff = this.hiedService.getHiedStuff('hello');      
    }

}