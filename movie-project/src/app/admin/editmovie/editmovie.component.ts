import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-editmovie',
  templateUrl: './editmovie.component.html',
  styleUrls: ['./editmovie.component.css']
})
export class EditmovieComponent implements OnInit {

  constructor(private _acticatedRoute:ActivatedRoute,private _movieService:MovieService,private _router:Router) { }

  public movieId:number
  public movie:Movie
  ngOnInit() {
this._acticatedRoute.paramMap.subscribe((map:ParamMap)=>{
  this.movieId=parseInt(map.get('movieId'));
  console.log(this.movieId);
 this._movieService.getById(this.movieId).subscribe(data=>{
   this.movie=data;
 },error=>{
   console.log(error);
 },()=>{})


},error=>{
  console.log(error);
},()=>{});
    
  }

updateMovie(){
console.log(this.movie);
this._movieService.updateMovie(this.movie).subscribe(data=>{
  console.log(data);
},error=>{
  console.log(error);
},()=>{})
this._router.navigate(['/home']);
}

}
