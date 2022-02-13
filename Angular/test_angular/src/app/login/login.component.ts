import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms'
import {SignupService} from '../services/signup.service'

import { NotificationService } from '../services/notification.service'

import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:SignupService, private notifyService : NotificationService, private router: Router) { }

  ngOnInit(): void {
  }

  loingForm = new FormGroup({
    email_or_username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(7)]),
  })

  loginUser(){
    console.log(this.loingForm.value)
    this.loginService.login(this.loingForm.value).subscribe((data:any)=>{
      console.log(data)
      if(data.code === 400){
        this.notifyService.showError(data.message, "Error");
      }else if(data.code === 200){
        localStorage.setItem('from_data', JSON.stringify(data.data));
        localStorage.setItem('token', data.data.token);
        this.router.navigate(['']);
        this.notifyService.showSuccess(data.message, "Success");
      }else{
        this.notifyService.showError(data.message, "Error");
      }
    })
  }

  get email_or_username(){
    return this.loingForm.get('email')
  }
  get password(){
    return this.loingForm.get('password')
  }

}
