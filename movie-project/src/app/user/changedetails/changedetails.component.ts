import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/userservice/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-changedetails',
  templateUrl: './changedetails.component.html',
  styleUrls: ['./changedetails.component.css']
})
export class ChangedetailsComponent implements OnInit {

  constructor(private _userService:UserService,private _router:Router,private _toasterService:ToastrService) { }
public user:User;
public cities:string[]=[]
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

  ngOnInit() {
  this.user=JSON.parse(sessionStorage.getItem('user'));
    console.log(this.user);
  
  }

  getCities(state:string){
  
    this._userService.getAllStates().subscribe(data=>{
        this.cities=[]
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

   update(){
     console.log(this.user);
   }

}
