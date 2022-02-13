import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms'
import {SignupService} from '../services/signup.service'

import { NotificationService } from '../services/notification.service'

import {Router} from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  constructor(private signup:SignupService, private notifyService : NotificationService, private router: Router) { }

  ngOnInit(): void {
  }

  userForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(7)]),
    confirm_password: new FormControl('', [Validators.required])
  })

  singupUser(){
    console.log(this.userForm.value)
    this.signup.signup(this.userForm.value).subscribe((data:any) =>{
      console.log(data);
      if(data.code === 400){
        this.notifyService.showWarning(data.message, "Warning");
      }else if(data.code === 201){
        console.log("else condition work")
        this.router.navigate(['/login']);
        this.notifyService.showSuccess(data.message, "Success");
      }else{
        this.notifyService.showError(data.message, "Error");
      }
    })

  }

  get username(){
    return this.userForm.get('username')
  }
  get email(){
    return this.userForm.get('email')
  }
  get password(){
    return this.userForm.get('password')
  }

  get confirm_password(){

    return this.userForm.get('confirm_password')
  }

}
