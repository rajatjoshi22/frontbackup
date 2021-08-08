import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router:Router) { }
 public userName:string
 public choice:string
  genres:string[]=['Thriller','Comedy','Action','Fiction','Mystry','Anime','Sci-Fi','Drama','Crime']
  languages:string[]=['Hindi','Kannada','Tamil','Telugu','Malayalam','English','Bangla','Gujarati','Odia','Punjabi','Konkani','Bhojpuri']
  ngOnInit() {
    
    this.userName=sessionStorage.getItem('userName');
  }
 locate(){
if(sessionStorage.getItem('userName')=='Admin'){
  this._router.navigate(['admin/add-movie']);
}else if(sessionStorage.getItem('username')!='Admin'){
  this._router.navigate(['user/show-cart']);
}
 }

 search(){
   console.log(this.choice);
   this._router.navigate(['/choice-list',this.choice]);
 }
}
