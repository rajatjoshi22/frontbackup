import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
@Component({
  selector: 'app-pipeexample',
  templateUrl: './pipeexample.component.html',
  styleUrls: ['./pipeexample.component.css']
})
export class PipeexampleComponent implements OnInit {

  constructor() { }
  public filterChoice=""
   public name:string="Rajat Joshi"
  public  names:string[]=["Rajat","Dante","Nero","Zeus"]
  public date:Date=new Date()
  fruits=['apple','orange','Kiwi','papaya','Strawberry']
  courses:Course[]=[new Course("Java",123,12000,"Back End",34),
  new Course("spring",133,22000,"Back End"),
  new Course("Angular",143,42000,"FrontEnd",44),
  new Course("node",193,1000,"Back End",1)
]
username:string='Rajat'
username2:string='Shreya'
username3:string='Zeus'
money=67
percent=0.67
  ngOnInit() {
  }

}
