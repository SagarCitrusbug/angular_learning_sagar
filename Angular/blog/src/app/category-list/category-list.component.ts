import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  template: `
    <p class='custom-css'>
      category-list works!
    </p>
  `,
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
