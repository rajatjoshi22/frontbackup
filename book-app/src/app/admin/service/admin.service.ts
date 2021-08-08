import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _httpClient:HttpClient) { }
  addBook(book:Book){
    console.log(book)
    let _url="http://localhost:8083/book-api/Book"
    console.log(book);
     return  this._httpClient.post<any>(_url,book);
}
getBookById(bookId:number):Observable<any>{
  let _url="http://localhost:8083/book-api/book-By-Id?bookId="+bookId;
  return this._httpClient.get<any>(_url);
 
}
updateBook(book:Book){
  console.log(book)
  let _url="http://localhost:8083/book-api/Book"
  return this._httpClient.put<any>(_url,book);
}
deleteBook(bookId:number){
  let _URL="http://localhost:8083/book-api/Book?bookId="+bookId;
  return this._httpClient.delete<any>(_URL);
}
}