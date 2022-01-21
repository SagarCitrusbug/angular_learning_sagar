import { Component } from '@angular/core';

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
}
