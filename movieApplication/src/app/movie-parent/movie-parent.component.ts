import { Component, OnInit } from '@angular/core';
import{Movie} from '../movie'
import { MovieService } from '../services/movie.service';
@Component({
  selector: 'app-movie-parent',
  templateUrl: './movie-parent.component.html',
  styleUrls: ['./movie-parent.component.css']
})
export class MovieParentComponent implements OnInit {

  public movie:Movie;
  constructor(private _movieService:MovieService) { }
 public movies:Movie[]=this._movieService.getMovie()

  ngOnInit() {
  }
  showDetails(movie:Movie){
  this.movie=movie
  }
}
