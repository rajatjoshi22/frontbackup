import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../user/models/user';
import { UserService } from '../userservice/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  loginId:string;
  public user:User
  constructor(private _userService:UserService,private _router:Router) { 
  }

  validateUser(loginId:string,password:string):Observable<User>{
    const loginObs=this._userService.userLogin(loginId,password);
    loginObs.subscribe(data=>{
      this.user=data;
      if(this.user!=null){
        console.log('inside')
        sessionStorage.setItem('userName',this.user.userName);
        sessionStorage.setItem('user',JSON.stringify(this.user));
       
        localStorage.setItem('isLoaded',"false");
      }
    },error=>{
      console.log(error);
    },()=>{
     
      
    })
   
   return loginObs;

  }
  isUserLoggedIn=()=>{
   if(sessionStorage.getItem('user')!=null)
     return true;
   else
   return false;
  }
  checkUser=()=>{
    if(this.loginId=='Admin')
     return true
    return false; 
  }
  logOut=()=>{
    // this.isLoggedin=false;
    sessionStorage.clear();
    this._router.navigate(['login']);
  }
}
