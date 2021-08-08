import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d1',
  templateUrl: './directiveassign.component.html',
  styleUrls: ['./directiveassign.component.css']
})
export class DirectiveassignComponent implements OnInit {

  public fruits:string[]=['orange','apple','mango','papaya','kiwi']
  public isOrange=true
  public isPink=true
  public isRed=true
  constructor() { }
  ngOnInit() {
  }


}
