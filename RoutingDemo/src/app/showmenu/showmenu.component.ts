import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HotelService } from '../hotelservice/hotel.service';
import { Hotel } from '../modelclassses/hotel';

@Component({
  selector: 'app-showmenu',
  templateUrl: './showmenu.component.html',
  styleUrls: ['./showmenu.component.css']
})
export class ShowmenuComponent implements OnInit {


  constructor(private _activatedRouter:ActivatedRoute,private hotelService:HotelService) { }
 public hotelId
  public hotels:Hotel[]
  public hotel:Hotel
  ngOnInit() {
    this._activatedRouter.paramMap.subscribe((map:ParamMap)=>{
      this.hotelId=parseInt(map.get('id'));
    })
    this.hotels=this.hotelService.gethotelList();
    this.hotels.forEach(hotel=>{
      if(hotel.hotelId==this.hotelId)
      {
        this.hotel=hotel
      }
    })
  }

}
