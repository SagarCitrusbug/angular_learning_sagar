import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'

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
    console.log(item);
  }

  // Basic typescript for angular
  // Normal single datatype define.
  data:string = "helloo";

  // two datatype define in single variable.
  twoData: number | string = 10;

  // object datatype define and in this define all parameter with datatype.
  objData:{name:string, phone:number}={name:'test', phone:123};

  // array datatype define
  arrData:string[] = ['test', 'testy', 'abc']

  // pass date for Pipes
  today = Date()

  // json pipes use
  jsonPipes:{name:string, phone:number}={name:'test', phone:123};

  // Template driven form
  loginForm(item:any){
    console.log(item)
  }

  // Reactive Form in Angular
  userForm = new FormGroup({
    username: new FormControl('',[Validators.required, Validators.email]),
    u_password: new FormControl('',[Validators.required, Validators.minLength(6)])
  })
  loginUser(){
    console.log(this.userForm.value)
  }

  // Reactive form Validations
  get username(){
    return this.userForm.get('username')
  }
  get u_password(){
    return this.userForm.get('u_password')
  }

  // Directive | custom | example
}
