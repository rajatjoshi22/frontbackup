import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private _router:Router,private _toasterService:ToastrService) { }

  ngOnInit() {
  }
  logOut(){
    sessionStorage.setItem("loginId",null);
    sessionStorage.setItem("password",null);
    this._toasterService.warning("LogOut Successfull!!!!")
    this._router.navigate(['admin'])
  }
}
