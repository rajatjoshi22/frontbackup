import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotelservice/hotel.service';
import { Hotel } from '../modelclassses/hotel';


@Component({
  selector: 'app-dineout',
  templateUrl: './dineout.component.html',
  styleUrls: ['./dineout.component.css']
})
export class DineoutComponent implements OnInit {
// hotelList:Hotel[]
//   constructor(private _hotelService:HotelService) { }

  ngOnInit() {
//     this._hotelService.gethotelList().subscribe(
//       (data)=>{
//         this.hotelList=data;
//       },
//       (error)=>{
//         console.log(error);
//       },()=>{
//         console.log('complete');
//       }
//     );
//      console.log(this.hotelList);
  }
  }


