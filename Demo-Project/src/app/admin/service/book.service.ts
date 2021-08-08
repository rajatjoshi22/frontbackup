import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

 
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
showMultiples=(num1:number,num2:number):Observable<number>=>{
  return interval(1000).pipe(take(num2+1),map((x)=>{
if(x>=1){
return x*num1;
}
}))
  }
}
