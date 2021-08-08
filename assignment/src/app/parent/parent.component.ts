import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  courses:Course[]=[new Course("Java",123,12000,"Back End",34),
  new Course("spring",133,22000,"Back End"),
  new Course("Angular",143,42000,"Front End",44),
  new Course("node",193,1000,"Back End",1),
  new Course("DevOps",777,12000,"systems development",23)
]
 public course1:Course
  constructor() { }

  ngOnInit() {
  }
  showCourse(){
    console.log(this.course1)
  }
}
