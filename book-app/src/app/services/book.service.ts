import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
 public books:Book[]

// getBooks():Observable<Book[]>{
//   let _url="http://localhost:8083/book-api/Books"
//   let bookList=this.books;
//   const bookObs=of(bookList);
//   return bookObs;
// }
getBooks():Observable<any>{
  let _url="http://localhost:8083/book-api/Books"
  return this._httpClient.get<any>(_url);
}

// getBookById(bookId:number):Observable<Book>{
//   let bookr:Book
//   this.getBooks().subscribe(data=>{
//     data.forEach(book=>{
//       if(book.bookId==bookId){
//         bookr=book;
//       }
//     })
//   })
//   const bookOb=of(bookr);
//   return bookOb;
// }

getBookById(bookId:number):Observable<any>{
  let _url="http://localhost:8083/book-api/book-By-Id?bookId="+bookId;
  return this._httpClient.get<any>(_url);
 
}
  constructor(private _httpClient:HttpClient) { }
  getBookbyChoice(choice:string){
     let _url="http://localhost:8083/book-api/book-By-Choice?choice="+choice;
     return this._httpClient.get<any>(_url);
  }
}
