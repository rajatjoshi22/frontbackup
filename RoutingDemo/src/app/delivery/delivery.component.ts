import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { HotelService } from '../hotelservice/hotel.service';
import { Hotel } from '../modelclassses/hotel';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  hotelList:Hotel[]
  constructor(private _hotelService:HotelService,private _route:Router) { }

  ngOnInit() {
    this.hotelList=this._hotelService.gethotelList();
      
     console.log(this.hotelList);
  }
  onSearch=(hotel:Hotel)=>{
this._route.navigate(["/delivery",hotel.hotelId]);
  }

}
