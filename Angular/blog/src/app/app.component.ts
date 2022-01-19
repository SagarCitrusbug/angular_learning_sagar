import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  getValue(){
    return 'Function value return!'
  }

  getName(name:string, name1:string){
    alert(name)
    console.log(name1)
  }

  getData(val:string){
    console.log(val)
  }
  getKeydownData(val:string){
    console.log(val)
  }

  getblurData(val:string){
    console.log(val)
  }

  getinputData(val:string){
    console.log(val)
  }

  getGetData(val:string){
    console.log(val)
  }

}
