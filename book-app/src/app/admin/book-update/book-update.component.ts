import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Book } from 'src/app/models/book';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'admin-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {

  constructor(private _activatedRouter:ActivatedRoute,private _adminService:AdminService) { }
public bookId:number
public book:Book
public sendBook:Book
public errormsg:string
  ngOnInit() {
    this._activatedRouter.paramMap.subscribe((map:ParamMap)=>{
      this.bookId=parseInt(map.get("id"));
    })
    console.log(this.bookId)
   this._adminService.getBookById(this.bookId).subscribe(data=>{
     this.book=data
   },error=>{
     console.log(error);
   },()=>{
     console.log(this.book);
   })
  }
  onSubmit(){
    this.sendBook=new Book(this.book.bookTitle,this.book.bookId,this.book.bookCategory,this.book.imagePath,this.book.description,this.book.bookAuthor,this.book.bookPrice);
    console.log(this.sendBook);
    this._adminService.updateBook(this.sendBook).subscribe(data=>{},error=>{console.log(error)});
  }

}
