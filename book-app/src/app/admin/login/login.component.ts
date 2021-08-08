import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginId:string
  public password:string
  public errorMsg:string
  constructor(private _router:Router,private _toasterService:ToastrService) { }

  ngOnInit() {
    if(sessionStorage.getItem("loginId")==="admin" && sessionStorage.getItem("password")==="admin1234"){
      console.log("true");
      this._router.navigate(['admin-dashboard/add-book']);
    }
    console.log(sessionStorage.getItem('loginId'));
    console.log(sessionStorage.getItem('password'));
  }
  Login(){
    if(this.loginId=="admin" && this.password=="admin1234"){
      sessionStorage.setItem("loginId",this.loginId);
      sessionStorage.setItem("password",this.password);
      this._toasterService.success('loginSuccessfull!!!')
     this._router.navigate(['admin-dashboard/add-book']);
    }else{
      this._toasterService.warning('login Failed!!!!')
      this.errorMsg="*Invalid LoginId or password"
    }
  }
}
