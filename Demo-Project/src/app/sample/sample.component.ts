import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  template:`
  <h2>{{message}}</h2>
  <h3 [class]='myheader'>{{student.name}}</h3>
  `,
  styles: [
    `
    .myheader{
      color: purple;
      background-color: black;
  }
    `
  ]
})
export class SampleComponent implements OnInit {
message="This is sample component"
address='/assets/images/img.jpg'
student={
  name:"Rajat",
  city:"Delhi",
  mobileNo:9411671384
}
myheader="myheader"
  constructor() { }

  ngOnInit() {
  }

}
