import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MovieService } from 'src/app/services/movie.service';
import { User } from '../models/user';

@Component({
  selector: 'app-deletebooking',
  templateUrl: './deletebooking.component.html',
  styleUrls: ['./deletebooking.component.css']
})
export class DeletebookingComponent implements OnInit {

  constructor(private _activatedRouter:ActivatedRoute,private _movieServie:MovieService,private _router:Router,private _toastr:ToastrService) { }
 
  public orderId:number;
  public password;
  public user:User;
  ngOnInit() {

this.user=JSON.parse(sessionStorage.getItem('user'));

    this._activatedRouter.paramMap.subscribe((map:ParamMap)=>{
      this.orderId=parseInt(map.get('orderId'));
      console.log(this.orderId);
    })
  }

  onSubmit(){
    
   if(this.user.password==this.password){
    console.log(this.orderId);
    this._movieServie.deleteOrder(this.orderId).subscribe(data=>{
      console.log(data);
    },error=>{
      console.log(error);
    })
    this._router.navigate(['/user/orders']);
   }else{
     this._toastr.warning('Wrong Password');
   }
  }

}
