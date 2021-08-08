import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
public title:string='Angular Training';
 public message:string='Great Day';
 public names:string[]=['Rajat','Rohan','Monty','Oggy'];
  ngOnInit() {
  }
changeMessage=()=>{
  this.message='Good Day';
}
}
