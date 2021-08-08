import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, observable, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';
@Component({
  selector: 'app-observe',
  templateUrl: './observe.component.html',
  styleUrls: ['./observe.component.css']
})
export class ObserveComponent implements OnInit,OnDestroy{

  constructor() { }
   numbers:number
   obsSubscription:Subscription
   tenlist:number
   tenMultiple:number
  ngOnInit() {


  //  let numberList:Observable<number>= interval(1000);
  //  this.obsSubscription=numberList.subscribe(data=>{
  //   this.numbers=data;
  //   console.log(data)
  //  },(error)=>{
  //    console.log(error);
  //  },()=>{
  //    console.log('completed')
  //    console.log(this.numbers)
  //  })

   let tennumberList:Observable<number>=interval(1000).pipe(take(10))
     this.obsSubscription=tennumberList.subscribe(data=>{
       this.tenlist=data
       console.log(data)
     })

     let tenMultiples:Observable<number>=interval(1000).pipe(take(10),map(x=>x*10));
     tenMultiples.subscribe(data=>{
       console.log(data)
       this.tenMultiple=data
     })
    }
   ngOnDestroy(){
     console.log('ng on destroy')
     this.obsSubscription.unsubscribe();
   }
}
