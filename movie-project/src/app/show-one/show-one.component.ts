import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-show-one',
  templateUrl: './show-one.component.html',
  styleUrls: ['./show-one.component.css']
})
export class ShowOneComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute,private _movieService:MovieService) { }
public movieId:number;
public movie:Movie
  ngOnInit() {
    this._activatedRoute.paramMap.subscribe((map:ParamMap)=>{
     this.movieId=parseInt(map.get('movieId'));
     console.log(this.movieId)
    },error=>{console.log(error)},()=>{
    })
    this._movieService.getById(this.movieId).subscribe(data=>{
      this.movie=data;
    },error=>{},()=>{
      console.log(this.movie);
    })
  }

}
