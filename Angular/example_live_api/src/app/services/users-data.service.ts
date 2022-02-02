import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }
  users(){
    return this.http.get(this.url)
  }
  headers = {
    headers: new HttpHeaders({
    'Content-type': 'application/json; charset=UTF-8'
  })
  }
  saveUser(data:any){
    return this.http.post(this.url, data, this.headers)
  }
}
