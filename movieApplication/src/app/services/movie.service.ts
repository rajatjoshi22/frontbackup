import { Injectable } from '@angular/core';
import {Movie} from '../movie';
@Injectable({
  providedIn: 'root'
})

export class MovieService {

  public movie:Movie[]=[
    new Movie("Movie1","hindi","horror",new Date(),1200,'2hr43min'),
    new Movie("Movie2","hindi","action",new Date(),1300,'2hr53min'),
    new Movie("Movie3","tamil","comedy",new Date(),1400,'2hr33min'),
    new Movie("Movie4","telugu","horror",new Date(),1500,'2hr23min'),
    new Movie("Movie5","malyalam","action",new Date(),1600,'2hr13min'),
    new Movie("Movie6","hindi","comedy",new Date(),1700,'2hr23min'),
    new Movie("Movie7","english","horror",new Date(),1800,'2hr23min'),
    new Movie("Movie8","english","comedy",new Date(),1900,'2hr43min')
  
  ]
  constructor() { }
  getMovie=():Movie[]=>{
    return this.movie
  }
}
