import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Cart } from '../models/cart';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute,private _router:Router,private _movieService:MovieService) { }

  public movieId:number;
  public movie:Movie;
  public loginId:string;
  public cart:Cart;
  ngOnInit() {

    this._activatedRoute.paramMap.subscribe((map:ParamMap)=>{
     this.movieId=parseInt(map.get('movieId'));
     console.log(this.movieId);
    })

       this.loginId=JSON.parse(sessionStorage.getItem('user')).loginId;

        console.log(this.loginId);

    this._movieService.getById(this.movieId).subscribe(data=>{
       this.movie=data;
       
    },error=>{
      console.log(error);
    },()=>{
      console.log(this.movie);
      this.cart=new Cart(this.loginId,this.movie);

       this._movieService.addToCart(this.cart).subscribe(data=>{
      console.log(data);
    },error=>{
      console.log(error);
    },()=>{
    })
    this._router.navigate(['/user/show-cart']);

   
    })


    

   
  }

}
