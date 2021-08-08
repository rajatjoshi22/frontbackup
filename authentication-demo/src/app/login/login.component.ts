import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public loginId:string;
 public password:string;
 @ViewChild('refForm',{static:false}) refForm:NgForm
 public user 
 public returnUrl:string
 constructor(private _authService:AuthenticationService,private _router:Router,private _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.queryParamMap.subscribe((map:ParamMap)=>{
      this.returnUrl=map.get('returnUrl');
    })
  }
onSubmit(){
  this.user=this.refForm.value
  console.log(this.user);
  console.log(this.returnUrl);
  this._authService.validateUser(this.user).subscribe(data=>{
   if(this.returnUrl!=null){
    this._router.navigate([this.returnUrl]);
   }
  })
  
  
}
}
