import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { AdminService } from '../service/admin.service';
import { map } from 'rxjs/operators'

@Component({
  selector: 'admin-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  constructor(private _adminService:AdminService,private _router:Router) { }
  ngOnInit() {
  }
 
  public addBookForm=new FormGroup({
    bookTitle:new FormControl(),
    bookId:new FormControl(),
    bookCategory:new FormControl(),
    imagePath:new FormControl(),
    description:new FormControl(),
    bookAuthor:new FormControl(),
    bookPrice:new FormControl()
  })

  onSubmit(){
    let book:Book=this.addBookForm.value;
    console.log(book)
    this._adminService.addBook(book).pipe(map(x=>JSON.parse(x))).subscribe(data=>{console.log(data)},error=>{console.log(error)});
  this._router.navigate(['/home']);
  }
  
}
