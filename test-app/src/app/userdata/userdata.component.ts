import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
  public genders=["male","female","others"]
 public userModel=new Users("","","","male",0);
  constructor(private _userService:UsersService) { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.userModel);
    this._userService.getEnroll(this.userModel).subscribe(
      data=>console.log(data),
      error=>console.log(error)
    )
  }
}
