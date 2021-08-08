import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { error } from 'selenium-webdriver';
import { User } from '../user/models/user';
import { UserService } from '../userservice/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _userService:UserService,private _router:Router,private _toastr:ToastrService) { }
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
public userSignUp=new FormGroup({
  loginId:new FormControl(),
  password:new FormControl(),
  userName:new FormControl(),
  mobileNumber:new FormControl(),
  address:new FormGroup({
    city:new FormControl(),
    state:new FormControl(),
    zipcode:new FormControl()
  })
})
  ngOnInit() {

  }
  signUp(){
    let user:User=this.userSignUp.value
    console.log(user);
    this._userService.userSignup(user).subscribe(response=>{console.log(response)},error=>{console.log(error)})
    this._toastr.success('SingnUp Successfull!!!!');
    this._router.navigate(['login']);
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
  
}
