import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  // Bind child component using below
  @Input() item = 0;
  @Input() user:{name: string, email: string, phone: string, socialAccount: any}={name: '', email: '', phone: '', socialAccount: ''}

  ngOnInit(): void {
  }

}
