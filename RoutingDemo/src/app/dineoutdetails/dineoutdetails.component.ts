import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HotelService } from '../hotelservice/hotel.service';
import { Hotel } from '../modelclassses/hotel';

@Component({
  selector: 'app-dineoutdetails',
  templateUrl: './dineoutdetails.component.html',
  styleUrls: ['./dineoutdetails.component.css']
})
export class DineoutdetailsComponent implements OnInit {

 constructor(private _route:ActivatedRoute,private hotelService:HotelService) { }
public hotelId:number
public hotels:Hotel[]
public hotel:Hotel
  ngOnInit() {
    let id=this._route.paramMap.subscribe((map:ParamMap)=>{
    this.hotelId=parseInt(map.get('id'));
    console.log(this.hotelId);
    })
   
  }


}
