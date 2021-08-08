import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {

  constructor() { }
public chairs:string[]=["Arm Chairs",
  "Rocking Chairs",
  "Lounge Chairs",
  "Cafe Chairs",
  "Iconic Chairs",
  "Slipper Chairs",
  "Barrel Chairs",
  "Cantilever Chairs",
  "Folding Chairs",
  "Plastic Chairs",
  "Wing Chairs",
  "Chair Spa"]
  public matts:string[]=[
    "Coir",
"Foam",
"Memory Foam",
"Bonnell Spring",
"Pocket Spring",
"Latex",
"Coir & Foam",
"HR Foam",
"Cool Gel Foam",
"Rebonded Foam"
  ]
public cabis:string[]=[
  "Office Cabinets",
"File Cabinets",
"Pedestals",
"Plastic Cabinets",
"Book Shelves",
"Book Cases",
"Cabinets"
]

public Tables:string[]=[
 "Study Tables",
"Computer Tables",
"Writing Tables",
"Hutch Desks",
"Portable Tables",
"Office Tables",
"Work Stations",
"Executive Desks",
"Kids Study Table",
"Coffee Tables",
"Dinning Tables",
"Side Tables"
]
public sofas:string[]=[
  "1 Seater Sofas",
"2 Seater Sofas",
"3 Seater Sofas",
"Sofa Sets",
"Sectional Sofas",
"Sofa Cum Beds",
"Recliners",
"Futons",
"Sofa Spa"
]
  ngOnInit() {
  }
  show1 = function() {
    console.log('clicked');
    var modal:HTMLElement = document.getElementById("myModal2");
      modal.style.display = "block";
  }
  show2=function(){
    var modal:HTMLElement = document.getElementById("myModal2");
    modal.style.display = "none";
  }
}
