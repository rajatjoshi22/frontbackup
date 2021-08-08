import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
 parentMessageOne="First message from parent"
 parentMessageTwo="Second message from parent"
 mesage1:string
 message2:string
  constructor() { }

  ngOnInit() {
  }

}
