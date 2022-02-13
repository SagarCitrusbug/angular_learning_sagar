import { Component, OnInit } from '@angular/core';

import {DashboardService} from '../services/dashboard.service'
import { NotificationService } from '../services/notification.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  keywords:any
  constructor(private dashboard:DashboardService, private notifyService : NotificationService,) { 
    dashboard.keyword().subscribe((data:any)=>{
      console.log(data.data);
      this.keywords=data.data
    })
  }

  ngOnInit(): void {
  }
  token:string | null = localStorage.getItem('token')
  
  logout(){
    this.dashboard.logout().subscribe((data:any) =>{
      if(data.code === 400){
        this.notifyService.showWarning(data.message, "Warning");
      }else if(data.code === 200){
        console.log("else condition work")
        localStorage.clear();
        this.notifyService.showSuccess(data.message, "Success");
      }else{
        this.notifyService.showError(data.message, "Error");
      }
    })
  }

}
