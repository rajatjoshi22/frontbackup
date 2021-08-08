import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';
import { User } from '../user/models/user';

@Component({
  selector: 'app-movie-language',
  templateUrl: './movie-language.component.html',
  styleUrls: ['./movie-language.component.css']
})
export class MovieLanguageComponent implements OnInit {
public language:string
  constructor(private _movieService:MovieService,private _router:Router,private _activatedRoute:ActivatedRoute) {
    
   }
public movies:Movie[]
public user:User;
  ngOnInit() {
    // if(sessionStorage.getItem('userName')!='null' && sessionStorage.getItem('userName')!='Admin'){
    //   this._activatedRoute.paramMap.subscribe((map:ParamMap)=>{
    //     this.language=map.get('language');
    //   })
    // }
    // this._router.navigate(['user/movie-by-language',this.language]);

     this.user=JSON.parse(sessionStorage.getItem('user'));

    this._activatedRoute.paramMap.subscribe((map:ParamMap)=>{
      this.language=map.get('language');

      if(sessionStorage.getItem('user')==null){
      this._movieService.getByLanguage(this.language).subscribe(data=>{
                this.movies=data
      },error=>{
        console.log(error)
      },()=>{
        console.log(this.movies)
      })}else{
        this.movies=[];
        this._movieService.getByLanguage(this.language).subscribe(data=>{
          
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
