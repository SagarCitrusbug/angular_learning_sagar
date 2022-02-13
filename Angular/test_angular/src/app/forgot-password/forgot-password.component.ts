import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms'
import {SignupService} from '../services/signup.service'

import { NotificationService } from '../services/notification.service'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private forgotPasswordService:SignupService, private notifyService : NotificationService,) { }

  ngOnInit(): void {
  }

  forgotPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  forgotPassword(){
    console.log(this.forgotPasswordForm.value)
    this.forgotPasswordService.forgotPassword(this.forgotPasswordForm.value).subscribe((data:any)=>{
      console.log(data)
      if(data.code === 400){
        this.notifyService.showError(data.message, "Error");
      }else if(data.code === 200){
        this.notifyService.showSuccess(data.message, "Success");
      }else{
        this.notifyService.showError(data.message, "Error");
      }
    })
  }

  get email(){
    return this.forgotPasswordForm.get('email')
  }

}
