import { Injectable } from '@angular/core';
import { Accessories } from '../models/accessories';

@Injectable({
  providedIn: 'root'
})
export class AccessoriesService {

   accessories:Accessories[]=[
     new Accessories("headphone","boAt Rockerz 330","Boats",2500,'../assets/images/h1.jpg',"IPX4: Water and Sweat Resistant"),
     new Accessories("headphone","boAt Rockerz 235v2","Boats",3500,'../assets/images/h2.jpg',"Battery Time: Upto 20 Hours"),
     new Accessories("headphone","Powerbeats Pro","Beats",3500,'../assets/images/h3.jpg',"Wireless range: 10 m"),
     new Accessories("headphone","Bose QuietComfort 35","Bose",4500,'../assets/images/h4.jpg',"Bluetooth version: 5.0"),
     new Accessories("headphone","SAMSUNG AKG-Y500","Samsung",5500,'../assets/images/h5.jpg',"Type-c Charging")

   ]
  constructor() { }
  getAllAccessories(){
    console.log(this.accessories)
    return this.accessories;
  }
}
