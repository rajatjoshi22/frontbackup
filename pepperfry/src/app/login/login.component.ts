import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
close(){
  modal.style.display = "none";var modal:HTMLElement = document.getElementById("myModal");
    modal.style.display = "none";
}
}
