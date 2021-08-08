import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public books:Book[]
  constructor(private _bookService:BookService,private _activatedRouter:ActivatedRoute) { }
   public choice:string
  ngOnInit() {
   this._activatedRouter.data.subscribe(data=>{
   this.choice=data.name;
   console.log(this.choice);
   })

  //   this._bookService.getBooks().subscribe(data=>{
  //     this.books=data;
  //   },error=>{
  //     console.log(error);
  //   },()=>{
  //     console.log('complete');
  //     console.log(this.books);
  //   })
  this._bookService.getBookbyChoice(this.choice).subscribe(data=>{
    this.books=data;

  },error=>{
    console.log(error);
  },()=>{
    console.log('complete');
    console.log(this.books)
  })
  }


}
