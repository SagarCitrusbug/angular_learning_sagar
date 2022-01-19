import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-category-list',
  template: `
    <p class='custom'>
      sub-category-list works!
    </p>
  `,
  styles: [
    `.custom{
        color: #852369;
        font-size: 50px;
        margin:0;
    }`
  ]
})
export class SubCategoryListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
