import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
   
  public message='updating books'
  constructor() { }

  ngOnInit() {
  }

}
