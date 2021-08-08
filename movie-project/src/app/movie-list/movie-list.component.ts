import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';
import { User } from '../user/models/user';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  public user:User;
  public movies:Movie[]
  constructor(private _movieService:MovieService) { }

  ngOnInit() {
 
    console.log(sessionStorage.getItem('user'));

    this.user=JSON.parse(sessionStorage.getItem('user'));
    var isLoaded=localStorage.getItem('isLoaded');
    if(isLoaded=='false'){
      location.reload();
      localStorage.setItem('isLoaded','true');

    }
    if(sessionStorage.getItem('user')==null){
    this._movieService.getAllMovies().subscribe(data=>{
      this.movies=data;
    },error=>{
  console.log(error);
    },()=>{
      console.log('completed');
      console.log(this.movies)
    })
  }else{
    this._movieService.getByCity(this.user.address.city).subscribe(data=>{
      this.movies=data;
    },error=>{
  console.log(error);
    },()=>{
      console.log('completed');
      console.log(this.movies)
    })
  }
  }

}
