import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  signup_url = 'https://admin.creatorclasses.co/api/v1/user/signup/';
  login_url = 'https://admin.creatorclasses.co/api/v1/user/login/';
  forgotPassword_url = 'https://admin.creatorclasses.co/api/v1/user/forgot-password/';

  constructor(private http:HttpClient) { }

  signup(data:any){
    return this.http.post(this.signup_url, data)
  }

  login(data:any){
    return this.http.post(this.login_url, data)
  }

  forgotPassword(data:any){
    return this.http.post(this.forgotPassword_url, data)
  }

}
