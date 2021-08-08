import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Movie } from '../models/movie';
import { Order } from '../models/order';
import { MovieService } from '../services/movie.service';
import { User } from '../user/models/user';

@Component({
  selector: 'app-add-to-order',
  templateUrl: './add-to-order.component.html',
  styleUrls: ['./add-to-order.component.css']
})
export class AddToOrderComponent implements OnInit {

  public movieId:number
  public movie:Movie=null;
  constructor(private _activatedRoute:ActivatedRoute,private _movieService:MovieService,private _router:Router ) { }
   public user:User;
public ticketCount:number=0
public paymentMode:string
public totalPrice:number
   

  ngOnInit() {

    var isLoaded=localStorage.getItem('isLoaded');
    if(isLoaded=='false'){
      location.reload();
      localStorage.setItem('isLoaded','true');

    }



    this._activatedRoute.paramMap.subscribe((map:ParamMap)=>{
      this.movieId=parseInt(map.get('movieId'));
     
    })

     this.user=JSON.parse(sessionStorage.getItem('user'));
    console.log(this.movieId);
    this._movieService.getById(this.movieId).subscribe(data=>{
      this.movie=data;
    },error=>{
      console.log(error);
    },()=>{
      console.log(this.movie);
    })
    console.log(this.movieId);
    
  }
  increment(){
    this.ticketCount=this.ticketCount+1;
    this.totalPrice=this.ticketCount*this.movie.price;
  }
  decrement(){
    if(this.ticketCount>0){
    this.ticketCount=this.ticketCount-1;
    }
    this.totalPrice=this.ticketCount*this.movie.price;
  }

  onSubmit(){
    let order:Order=new Order(this.user,this.movie,this.ticketCount,this.paymentMode,this.totalPrice);
   
   console.log(order);
   this._movieService.addOrder(order).subscribe(data=>{
     console.log(data);
   },error=>{
     console.log(error);
   },()=>{

   })
     this._router.navigate(['payment-gateway']);
  }
}
