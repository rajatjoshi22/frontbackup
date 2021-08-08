import { Component, OnInit } from '@angular/core';
import { Accessories } from '../models/accessories';
import { Mobile } from '../models/mobile';
import { AccessoriesService } from '../services/accessories.service';
import { MobileService } from '../services/mobile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mobiles:Mobile[]
  accessories:Accessories[]
  constructor(private _mobileService:MobileService,private _accessoriesService:AccessoriesService) { }

  ngOnInit() {
    this.accessories=this._accessoriesService.getAllAccessories();
    this.mobiles=this._mobileService.getAllMobiles();
  }

}
