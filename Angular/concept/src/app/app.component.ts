import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BasicConcept-learning.';
  // If-else Condition.
  show='no';
  // Multiple condition or else if.
  color='green';
  // Switch case.
  switchColor='burlywood';

  // For Loop | *ngFor
  users = ['Anil', 'Bhaker', 'Sam', 'Peter', 'Burce'];

  // Make Array of Object && Apply Loop on Object's Array
  usersDetails = [
    {'name': 'Anil', 'email': 'anil@gmail.com', 'phone':'8888', 'socialAccount': ['facebook', 'google', 'instagram']},
    {'name': 'Bhaker', 'email': 'Bhaker@gmail.com', 'phone':'1111', 'socialAccount': ['youtube', 'google', 'linkedin']},
    {'name': 'Sam', 'email': 'Sam@gmail.com', 'phone':'5555', 'socialAccount': ['facebook', 'yahoo', 'instagram']},
    {'name': 'Peter', 'email': 'Peter@gmail.com', 'phone':'4444', 'socialAccount': ['yahoo', 'linkedin', 'twitter']},
    {'name': 'Burce', 'email': 'Burce@gmail.com', 'phone':'3333', 'socialAccount': ['twitter', 'google', 'instagram']},
  ]
  // Style Binding | Dynamic Style
  fontcolor='red';
  bgColor='yellow';
  
  updateColor(){ 
    this.fontcolor = 'blue';
    this.bgColor = 'green';
  }
  
  // Basic Form
  userData:any = {};
  getData(data:NgForm){
    console.log(data)
    this.userData=data;
  }

  // Toggle Element | hide and show tag
  tgValue=true;
  toggle(){
    this.tgValue=!this.tgValue
  }

  // Todo list.
  todo:any[] = []
  addTask(data:string){
    this.todo.push({id:this.todo.length, name:data});
  }

  romoveTask(id:number){
   this.todo=this.todo.filter(item=>item.id!==id)
   console.log(this.todo)
  }

  // Pass Data child to component
  childData = 10
  updateValue(){
    this.childData = Math.floor(Math.random()*100)
  }

  // Send data child to parent component
  childData1 = "";
  updateChild(item:string){
    this.childData1=item
  }



}
