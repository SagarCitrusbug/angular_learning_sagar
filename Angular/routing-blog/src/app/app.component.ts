import { Component } from '@angular/core';
import {UserDataService} from './services/user-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-blog';
  usersDetails = [
    {'name': 'Anil', 'email': 'anil@gmail.com'},
    {'name': 'Bhaker', 'email': 'Bhaker@gmail.com'},
    {'name': 'Sam', 'email': 'Sam@gmail.com'},
  ]

  users:any;
  constructor(private userData:UserDataService) {
    console.log(userData.user())
    this.users=userData.user()
   }
}
