import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-app';
  choice:string
constructor(private router:Router,private _bookService:BookService){}

  onSearch(){
    console.log('clicked')
   console.log(this.choice);
   this.router.navigate(['choice-list',this.choice]);
  }
}
