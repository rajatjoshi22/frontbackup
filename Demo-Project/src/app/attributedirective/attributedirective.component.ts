import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
@Component({
  selector: 'app-att1',
  templateUrl: './attributedirective.component.html',
  styleUrls: ['./attributedirective.component.css']
})
export class AttributedirectiveComponent implements OnInit {

  isOne=true
  isTwo=true
  isThree=true
 
  color='blue'


  appClass={
    "one":this.isOne,
    "two":this.isTwo,
    "three":this.isThree
  }
  courses:Course[]=[new Course("Java",123,12000,"Back End",34),
  new Course("spring",133,22000,"Back End"),
  new Course("Angular",143,42000,"Front End",44),
  new Course("node",193,1000,"Back End",1),
  new Course("DevOps",777,12000,"systems development",23)
]


getStyles=()=>{
  return{
    'color':'green',
    'background-color':'orange'
  }
}
  public fruits:string[]=['orange','apple','mango','papaya','kiwi']
  constructor() { }

  ngOnInit() {
  }

}
