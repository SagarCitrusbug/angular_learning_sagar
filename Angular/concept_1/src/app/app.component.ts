import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'concept_1';
  // Two way binding
  name:any;

  // Template Reference Variable
  templateRef(item:HTMLInputElement){
    console.log(item)
  }
}
