import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authentication-demo';

   constructor(private _authService:AuthenticationService,private _router:Router){}
  logOut(){
 this._authService.logOut();
 this._router.navigate(['/home']);
  }
}
