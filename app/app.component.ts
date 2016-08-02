import { Component } from '@angular/core';
import { ExampleService } from './example/example.service'
import { object } from './example/object';

@Component({
  selector: 'my-app',
  template: '<h1>{{title}}</h1> <p>hello there</p> <ul class="heroes"> <li *ngFor="let hied of hiedStuff">'+
            '<span class="badge">{{hied.id}}</span> {{hero.name}}' + 
            '</li> </ul>',
  providers: [ExampleService]
})
export class AppComponent { 
    title: 'angularStuff';
    exampleObjects: Array<object>;

    constructor(private exampleService: ExampleService){this.getExample();}

    getExample(){
      debugger;
      this.exampleObjects = this.exampleService.getExample('hello');      
    }

}