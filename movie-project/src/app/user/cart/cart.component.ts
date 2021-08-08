import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { UserService } from 'src/app/userservice/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public _userService:UserService) { }
 
  public loginId:string;
  public carts:Cart[];
  ngOnInit() {

    var isLoaded=localStorage.getItem('isLoaded');
    if(isLoaded=='false'){
      location.reload();
      localStorage.setItem('isLoaded','true');

    }

    this.loginId=JSON.parse(sessionStorage.getItem('user')).loginId;
    console.log(this.loginId);
    this._userService.getCarts(this.loginId).subscribe(data=>{
      this.carts=data;

    },error=>{
      console.log(error);
    },()=>{
          console.log(this.carts);
    })
  }
      
}
