import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { error } from 'selenium-webdriver';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../user/models/user';
import { UserService } from '../userservice/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public loginId:string
public password:string
public user:User
public returnUrl:string
public condition:boolean
  constructor( private _activatedRoute:ActivatedRoute,private _router:Router,private _userService:UserService,private _toastr:ToastrService,private _authService:AuthenticationService) { }

  ngOnInit() {
  this._activatedRoute.queryParamMap.subscribe((map:ParamMap)=>{
    let arr=map.getAll('returnUrl');
    console.log(arr[0]);
    console.log(arr[1]);
    this.returnUrl="/"+arr[0]+"/"+arr[1];
    console.log(this.returnUrl);
  })

  console.log('in login');
  console.log(sessionStorage.getItem('userName'));
  var isloaded=localStorage.getItem('isLoaded');
  if(isloaded=='true'){
    location.reload();
    localStorage.setItem('isLoaded','false');
  }
  }
  logIn(){
    if(this.loginId=='admin.user@movieapp.com' && this.password=='Admin@1234'){
      sessionStorage.setItem('userName','Admin');
      localStorage.setItem('isLoaded',"false");
      this._toastr.success('Login Successfull!!')
      this._router.navigate(['admin/add-movie']);
      }else{
      this._authService.validateUser(this.loginId,this.password).subscribe(data=>{
        this.user=data;
        console.log(this.user);
        if(this.user!=null){ 
          if(this.returnUrl!="/"+undefined+"/"+undefined){
            this._toastr.success('login successfull!!!!');
          this._router.navigate([this.returnUrl]);
        }else{
          this._toastr.success('login successfull!!!!');
          this._router.navigate(['/home']);
        }
           }else{
           this._toastr.warning('Invalid Details!!!!!')
           }
      },error=>{
        console.log(error);
      },()=>{
       
      })

      //  this._userService.userLogin(this.loginId,this.password).subscribe(data=>{
      //    this.user=data;
      //  },error=>{
      //    console.log(error);
      //  },()=>{
      //   if(this.user!=null){
      //     console.log('inside')
      //     sessionStorage.setItem('userName',this.user.userName);
      //     localStorage.setItem('isLoaded',"false");
      //     this._toastr.success("login Successfull!!!");
      //     this._router.navigate(['user/user-home']);
      //   }else{
      //     this._toastr.warning('invalid details!!!!!');
      //   }
      //  })




    }
  }
}
