import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private _router:Router,private _authService:AuthenticationService) { }

  ngOnInit() {
    var isLoaded=localStorage.getItem('isLoaded');
    if(isLoaded=='false'){
      location.reload();
      localStorage.setItem('isLoaded','true');

    }
    
  }
  logOut(){
    this._authService.logOut();
  }
}
