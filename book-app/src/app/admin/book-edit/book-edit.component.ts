import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  public bookId:number
  constructor(private _router:Router) { }

  ngOnInit() {
    
  }
  // getBook(){
  //   console.log(this.bookId)
  //   // this._router.navigate(['update-book',this.bookId]);
  // }
}
