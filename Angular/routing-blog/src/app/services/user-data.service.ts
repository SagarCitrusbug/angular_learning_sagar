import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  user(){
    return [
      {name: 'Peter', age: 18, email: 'Peter@gmail.com'},
      {name: 'Burce', age: 45, email: 'Burce@gmail.com'},
    ]
  }
}
