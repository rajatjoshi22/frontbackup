import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public choice:string
  constructor() { }
// Get the modal


// Get the button that opens the modal


// Get the <span> element that closes the modal


// When the user clicks on the button, open the modal
show = function() {
  console.log('clicked');
  var modal:HTMLElement = document.getElementById("myModal");
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
show1 = function() {
  console.log('clicked');
  var modal:HTMLElement = document.getElementById("myModal");
    modal.style.display = "none";var modal:HTMLElement = document.getElementById("myModal");
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event):void {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
onSubmit(){
  console.log("clicked");
  console.log(this.choice);
}

  ngOnInit() {
  }

}
