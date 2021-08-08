import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'admin-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {

  public bookId:number
  constructor(private _adminService:AdminService) { }

  ngOnInit() {
  }
deleteBook(){
  this._adminService.deleteBook(this.bookId).subscribe(response=>{
    console.log(response);
  },error=>{
    console.log(error);
    
  })
}

}
