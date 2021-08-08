import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
str:string='Great Day'
num:number=10000
username:string='Rajat'
date:Date=new Date()
minutes=126
  constructor() { }

  ngOnInit() {
  }

}
