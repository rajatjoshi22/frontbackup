import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {

  public movieId:number;
  constructor(private _router:Router) { }

  ngOnInit() {
  }
  updateMovie(){
   this._router.navigate(['/admin/update-movie/edit-movie',this.movieId]);
  }
}
