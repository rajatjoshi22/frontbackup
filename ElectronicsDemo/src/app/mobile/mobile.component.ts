import { Component, OnInit } from '@angular/core';
import { Mobile } from '../models/mobile';
import { MobileService } from '../services/mobile.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  mobiles:Mobile[];
  constructor(private _mobileService:MobileService) { }

  ngOnInit() {
    console.log(this._mobileService.getAllMobiles())
    this.mobiles=this._mobileService.getAllMobiles();
  }

}
