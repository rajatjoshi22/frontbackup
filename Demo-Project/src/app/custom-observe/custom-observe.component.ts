import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-custom-observe',
  templateUrl: './custom-observe.component.html',
  styleUrls: ['./custom-observe.component.css']
})
export class CustomObserveComponent implements OnInit {

  constructor() { }
  public number: number
  ngOnInit() {

    let customObs: Observable<number> = new Observable(observer => {
      let count = 0
      setInterval(() => {
        if(count>10){
          observer.error(new Error('count exceeds to 5'));
        }
        if(count==6){
          observer.complete();
        }
        observer.next(count);
        count++;
      }, 1000)
    })

    customObs.subscribe(data => {
      this.number = data;
    },error=>{
      console.log(error);
    },()=>{
      console.log('complete')
    })
  }

}
