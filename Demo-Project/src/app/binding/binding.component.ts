import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  logo="/assets/images/img.jpg"
  isdisabled=false
  message="Hello Buddy"
  headerClass='header'
  applyHeader=true
  constructor() { }

  ngOnInit() {
  }
  greetMessage():void{
    this.message="Have a great day buddy";
    document.getElementById("heading").style.display="block";
    document.getElementById("heading").innerHTML=this.message;
  }

  printMessage(name:string):void{
    this.message="Have a great day "+name;
    document.getElementById("display").style.display="block";
    document.getElementById("display").innerHTML=this.message;
  }

}
