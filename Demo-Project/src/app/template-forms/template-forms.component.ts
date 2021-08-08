import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {
 
  constructor() { }
@ViewChild("regForm",{static:false})
regForm:NgForm  

genders=['male','female']
ngOnInit() {
  console.log(this.genders);
  }
// onSubmit=(regForm:NgForm)=>{
//   console.log(regForm.value);

// }
onSubmit=()=>{
console.log(this.regForm.value)
}
}
