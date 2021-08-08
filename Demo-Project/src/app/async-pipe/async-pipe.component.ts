import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {

  constructor(private _courseService:CourseService) { }
  public courses:Course[]
  public courseObserver:Observable<Course[]>
  ngOnInit() {
  this._courseService.getAllCourses().subscribe((data)=>{
    this.courses=data;
  },
  (error)=>{
    console.log(error)
  },()=>{
    console.log('completed');
    console.log(this.courses);
  })
  this.courseObserver=this._courseService.getAllCourses();
  
  }

}
