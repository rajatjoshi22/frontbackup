import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Course } from '../course';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 @Input()public courses:Course[]
 @Output()childEvent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  showCourse(value:Course){
    console.log(value)
    this.childEvent.emit(value);
  }

}
