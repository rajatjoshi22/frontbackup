import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private _activeRoute:ActivatedRoute,private _bookService:BookService) { }
 public bookId:number
 public gbook:Book
  ngOnInit() {
   this._activeRoute.paramMap.subscribe((map:ParamMap)=>{
     this.bookId=parseInt(map.get('id'));
     console.log(this.bookId)

     this._bookService.getBookById(this.bookId).subscribe(data=>{
       this.gbook=data
     },error=>{
       console.log(error);
     })
   })
   console.log(this.gbook)
  }

}
