import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  templateUrl: './child-to-parent.component.html',
  styleUrls: ['./child-to-parent.component.css']
})
export class ChildToParentComponent implements OnInit {

  constructor() { }

  @Output() updateDataEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }

}
