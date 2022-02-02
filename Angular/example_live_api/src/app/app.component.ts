import { Component } from '@angular/core';
import {UsersDataService} from './services/users-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example_live_api';
  users:any;
  constructor(private usersData:UsersDataService){
    usersData.users().subscribe((data)=>{
      console.log(data)
      this.users=data;
    })
  }

  saveUserData(data:any){
    this.usersData.saveUser(data).subscribe((data)=>{
      console.log(data)
    })
  }
  
}
