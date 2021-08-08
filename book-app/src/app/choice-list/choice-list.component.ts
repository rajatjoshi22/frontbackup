import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-choice-list',
  templateUrl: './choice-list.component.html',
  styleUrls: ['./choice-list.component.css']
})
export class ChoiceListComponent implements OnInit {

  constructor(private _bookService:BookService,private _activatedRoute:ActivatedRoute) { }
 public choice:string
 public books:Book[]
  ngOnInit() {
    this._activatedRoute.paramMap.subscribe((map:ParamMap)=>{
      this.choice=map.get("choice");
    
    console.log(this.choice)
    this._bookService.getBookbyChoice(this.choice).subscribe(data=>{
      this.books=data
    },error=>{
      console.log(error);
    },()=>{
      console.log('completed');
      console.log(this.books);
    })
  })
  }

}
