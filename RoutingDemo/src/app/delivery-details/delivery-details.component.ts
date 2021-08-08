import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HotelService } from '../hotelservice/hotel.service';
import { Hotel } from '../modelclassses/hotel';

@Component({
  selector: 'app-delivery-details',
  templateUrl: './delivery-details.component.html',
  styleUrls: ['./delivery-details.component.css']
})
export class DeliveryDetailsComponent implements OnInit {

  public hotelId:number
  public hotels:Hotel[]
  public hotel:Hotel
  constructor(private _route:ActivatedRoute,private hotelService:HotelService,private _router:Router) { }

  ngOnInit() {
    // let id=parseInt(this._route.snapshot.paramMap.get('id'));
    // this.hotelId=id;
    let id=this._route.paramMap.subscribe((map:ParamMap)=>{
        let id=parseInt(map.get('id'));
        this.hotelId=id
    },
    (error)=>{
      
    },
    ()=>{
      console.log('completed');
    });
    this.hotel=this.hotelService.getHotelById(this.hotelId);
    console.log(this.hotel)
  }

}
