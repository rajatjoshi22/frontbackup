import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loginId:string;
  isLoggedin:boolean;
  constructor() { 
    this.isLoggedin=false;
  }

  validateUser(user:any):Observable<boolean>{
   console.log(user);
    this.loginId=user.loginId;
   this.isLoggedin=true;
   return of(this.isLoggedin);

  }
  isUserLoggedIn=()=>{
    return this.isLoggedin;
  }
  checkUser=()=>{
    if(this.loginId=='Admin')
     return true
    return false; 
  }
  logOut=()=>{
    this.isLoggedin=false;
  }
}
