import { Component, OnInit } from '@angular/core';
import { Accessories } from '../models/accessories';
import { AccessoriesService } from '../services/accessories.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {

  accessories:Accessories[]
  constructor(private _accessoriesService:AccessoriesService) { }

  ngOnInit() {

    this.accessories=this._accessoriesService.getAllAccessories();
    console.log(this.accessories)
  }

}
