import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { Theatre } from 'src/app/models/theatre';
import { MovieService } from 'src/app/services/movie.service';
import { UserService } from 'src/app/userservice/user.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  public states = [ "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry"]
  public cities:string[]=[]
  public movie:Movie
  
  public gen:string[]=[]
 
  languages:string[]=['Hindi','Kannada','Tamil','Telugu','Malayalam','English','Bangla','Gujarati','Odia','Punjabi','Konkani','Bhojpuri']
  genres:string[]=['Thriller','Comedy','Action','Fiction','Mystry','Anime','Sci-Fi','Drama','Crime']

  constructor(private _userService:UserService,private _movieService:MovieService,private _router:Router) { }

  ngOnInit() {
  }

  addmovieForm=new FormGroup({
    movieName:new FormControl(),
    ratings:new FormControl(),
    movieId:new FormControl(),
    language:new FormControl(),
    genre:new FormControl(),
    imagePath:new FormControl(),
    ageCriteria:new FormControl(),
    description:new FormControl(),
    duration:new FormControl(),
    director:new FormControl(),
    actor:new FormControl(),
    actress:new FormControl(),
    day:new FormControl(),
    price:new FormControl(),
    theatre:new FormGroup({
      theatreName:new FormControl(),
      state:new FormControl(),
      city:new FormControl(),
      zipcode:new FormControl()
    })
  })

  getCities(state:string){
  
    this._userService.getAllStates().subscribe(data=>{
        this.cities=["Select Your City...."]
    console.log(data)
    for(let index=0;index<data.length;index++){
      if(data[index].state==state){
        console.log(data[index])
        this.cities.push(data[index].name)
      }
    }
   }

     );
   }

  

   AddMovie(){
     console.log(this.addmovieForm.value)
    //  console.log(this.city);
  //    this.movie.language=this.language
  //    this.movie.theatre.city=this.city
  //    this.movie.theatre.state=this.state
  this.movie=this.addmovieForm.value;
  console.log(this.movie);
  this._movieService.addMovie(this.movie).subscribe(response=>{
    console.log(response);
  },error=>{
    console.log(error);
  },()=>{})
  this._router.navigate(['home']);
   }
}
