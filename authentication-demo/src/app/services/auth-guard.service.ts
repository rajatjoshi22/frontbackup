import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private _authService:AuthenticationService,private _router:Router) { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    if(this._authService.isUserLoggedIn()){
      console.log(this._authService.isUserLoggedIn())
    return true
    }else{
      alert('plzz login to view products');
      this._router.navigate(['/login'],{queryParams:{returnUrl:route.url}})
    }
  }
}
