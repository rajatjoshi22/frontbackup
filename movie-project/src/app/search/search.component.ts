import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public choice:string;
  public movies:Movie[];
  constructor(private _activatedRoute:ActivatedRoute,private _movieService:MovieService) { }

  ngOnInit() {

    this._activatedRoute.paramMap.subscribe((map:ParamMap)=>{
     this.choice=map.get('choice');

     this._movieService.getByChoice(this.choice).subscribe(data=>{
       this.movies=data;
     },error=>{
       console.log(error);
     },()=>{
       console.log('complete');
       console.log(this.movies);
     })
    })
  }

}
