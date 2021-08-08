import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  genres:string[]=['Thriller','Comedy','Action','Fiction','Mystry','Anime']
  languages:string[]=['Hindi','Kannada','Tamil','Telugu','Malayalam','English','Bangla','Gujarati','Odia','Punjabi','Konkani','Bhojpuri']
  constructor(private _router:Router,private _authService:AuthenticationService) { }

  ngOnInit() {
    
    
  }
  logOut(){
    this._authService.logOut();
  }
}
