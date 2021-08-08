import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {
public movieId:number
  constructor(private _movieService:MovieService,private _router:Router) { }

  ngOnInit() {
  }
  deleteMovie(){
     this._movieService.deleteMovie(this.movieId).subscribe(data=>{
       console.log(data);
     },error=>{
       console.log(error);
     })
     this._router.navigate(['/home']);
  }
}
