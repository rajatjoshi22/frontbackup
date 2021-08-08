import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../course';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  public courses:Course[]=[
]
public _url='assets/course.json'
  constructor(private _httpClient:HttpClient) { }

  getAllCourses=():Observable<Course[]>=>{
    return  this._httpClient.get<Course[]>(this._url);
  }
}
