import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.css']
})
export class ServiceExampleComponent implements OnInit {
 public courses:Course[]
  constructor(private _courseService:CourseService) { }

  ngOnInit() {
    // this.courses=this._courseService.getAllCourses()
  }


}
