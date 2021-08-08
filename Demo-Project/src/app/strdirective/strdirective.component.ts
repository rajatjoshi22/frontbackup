import { Component, OnInit } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-directive',
  templateUrl: './strdirective.component.html',
  styleUrls: ['./strdirective.component.css']
})
export class StrDirectiveComponent implements OnInit {

  userName="Rajat"
  uname="Priya"
  courseName='Angular'
  isRed=true
  isGreen=true
  public name=''

  names:string[]=["Rajat","Prashant","Rohan","Monty"]
  fruits=['apple','orange','Kiwi','papaya','Strawberry']
  courses:Course[]=[new Course("Java",123,12000,"Back End",34),
  new Course("spring",133,22000,"Back End"),
  new Course("Angular",143,42000,"FrontEnd",44),
  new Course("node",193,1000,"Back End",1)
]
  constructor() { }

  ngOnInit() {
  }
  showCourse(course:string){
    this.courseName=course
  }

}
