import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name="RAJAT JOSHI"
  message = 'Have a great day Buddy!!!!!';
  show=(message1:string)=>{
    this.message="welcome " +message1
    return "welcome" +message1
  }
}
