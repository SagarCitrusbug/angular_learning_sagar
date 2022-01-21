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
  displayValInBox=''; // if you want to define type of varable then use Variable_name:type(string,int,etc.)
  getNameValue(val:string){
    console.warn(val)
    this.displayValInBox = val
  }

  displayValInBox1=''; // if you want to define type of varable then use Variable_name:type(string,int,etc.)
  getNameValue1(val:string){
    console.warn(val)
    this.displayValInBox1 = val
  }

  count = 0;
  counter(type:string){
    type==='plus' ?this.count++:this.count--;

  }
}
