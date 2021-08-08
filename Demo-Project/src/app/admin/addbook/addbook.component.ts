import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
public title="Adding Books"
public multiple:number
public count:number
public bookMultiple:number
  constructor(private _bookService:BookService) { }

  ngOnInit() {
    console.log(this.multiple)
    console.log(this.count)
    
  }
  showMultiple(){
    console.log(typeof(this.count))
    this._bookService.showMultiples(this.multiple,this.count).subscribe((data)=>{
      this.bookMultiple=data;
   })
  }

}
