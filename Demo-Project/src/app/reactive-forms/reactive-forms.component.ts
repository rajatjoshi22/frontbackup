import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
public genders=['Male','Female','Others']
  constructor() { }
   signupForm=new FormGroup({
     username:new FormControl(),
     password:new FormControl(),
     email:new FormControl(),
     gender:new FormControl(),
     address:new FormGroup({
       city:new FormControl(),
       state:new FormControl(),
       country:new FormControl()
     })
   })
  ngOnInit() {
  }
  onSubmit=()=>{
    console.log(this.signupForm.value);
  }

}
