import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  calss_keyword_url = 'https://admin.creatorclasses.co/api/v1/creator/keywords/'
  logout_url = 'https://admin.creatorclasses.co/api/v1/user/logout/'

  keyword(){
    return this.http.get(this.calss_keyword_url)
  }

  token = localStorage.getItem('token') as string

  headers = {
    headers: new HttpHeaders().set(
      "Authorization",
      this.token
    )
  }

  logout(){
    return this.http.post(this.logout_url, null, this.headers)
  }

}
