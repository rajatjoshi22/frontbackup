import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
    constructor(private _authService:AuthenticationService,private _router:Router,private _toaster:ToastrService){}

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    if(this._authService.isUserLoggedIn()){
      console.log(this._authService.isUserLoggedIn())
    return true
    }else{
      this._toaster.warning('Plzzz Login ');
      console.log(route.url);
      this._router.navigate(['/login'],{queryParams:{returnUrl:route.url}})
    }
  }
}
