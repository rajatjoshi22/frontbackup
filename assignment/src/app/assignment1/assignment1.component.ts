import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {

  public message="Welcome to first assignment"
  public message2="Welcome to second page"
  public address1="/assets/images/pic1.jpg"
  public address2="/assets/images/pic2.jpg"
  public cls="change"

  public hasError=true;
  public headerColor="green"
  constructor() { }

  ngOnInit() {
  }
  change(){
  document.getElementById("color").className=this.cls
  document.getElementById("color").innerHTML=this.message2
  var img=document.getElementById("img")
  // img.src=this.address2
}
}
