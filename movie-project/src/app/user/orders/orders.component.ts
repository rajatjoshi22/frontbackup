import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { UserService } from 'src/app/userservice/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
   public loginId:string
   public user:User
   public orders:Order
  constructor(private _userService:UserService) { }

  ngOnInit() {
    this.user=JSON.parse(sessionStorage.getItem('user'));
    this.loginId=this.user.loginId;
    this._userService.getOrders(this.loginId).subscribe(data=>{
      this.orders=data;
    },error=>{
      console.log(error);
    },()=>{
      console.log(this.orders);
    })
  }
 
}
