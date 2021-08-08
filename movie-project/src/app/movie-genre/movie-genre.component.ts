import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';
import { User } from '../user/models/user';

@Component({
  selector: 'app-movie-genre',
  templateUrl: './movie-genre.component.html',
  styleUrls: ['./movie-genre.component.css']
})
export class MovieGenreComponent implements OnInit {

  constructor(private _movieService:MovieService,private _router:Router,private _activatedRoute:ActivatedRoute) { }
 public genre:string
 public movies:Movie[]
 public user:User;
  ngOnInit() {

    this.user=JSON.parse(sessionStorage.getItem('user'));
    this._activatedRoute.paramMap.subscribe((map:ParamMap)=>{
      this.genre=map.get('genre');
    if(this.user==null){
     this._movieService.getByGenre(this.genre).subscribe(data=>{
       this.movies=data;
       console.log(this.movies)
     },error=>{
       console.log(error)
     },()=>{
       console.log(this.movies);
     })}else{
      this.movies=[];
      this._movieService.getByGenre(this.genre).subscribe(data=>{
        
           data.forEach(movie => {
              if(movie.theatre.city==this.user.address.city){
                this.movies.push(movie);
              }
           });

            },error=>{
                console.log(error)
             },()=>{
                  console.log(this.movies)
              })
     }
    })
  }

 

}
