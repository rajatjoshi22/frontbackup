import { Injectable } from '@angular/core';
import {Hotel} from '../modelclassses/hotel';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Menu } from '../modelclassses/menu';
@Injectable({
  providedIn: 'root'
})
export class HotelService {
hotels:Hotel[]=[
  new Hotel("My Bar",123,'../assets/images/img1.jpg',"900 for 2",4.5,"Civil Lines Delhi",[new Menu("veg Burger","vegetarian",28,120,"veg cheese burger"),
  new Menu("veg Chowmin","vegetarian",25,140,"Chineese dish chowmin"),
  new Menu("Chilli paneer","vegetarian",27,180,"North Indian Dish"),
  new Menu("kadai paneer","vegetarian",28,120,"cottage cheese dish made with butter"),
  new Menu("Dosa","vegetarian",28,120,"South Indian cuisine")]),
  
  new Hotel("Pizza Bite",133,'../assets/images/img2.jpg',"1900 for 2",4.5,"Paschin Vihar",[new Menu("veg Burger","vegetarian",28,120,"veg cheese burger"),
  new Menu("veg Chowmin","vegetarian",25,140,"Chineese dish chowmin"),
  new Menu("Chilli paneer","vegetarian",27,180,"North Indian Dish"),
  new Menu("kadai paneer","vegetarian",28,120,"cottage cheese dish made with butter"),
  new Menu("Dosa","vegetarian",28,120,"South Indian cuisine")]),
  new Hotel("Food plaza",143,'../assets/images/img3.jpg',"2900 for 2",4.5,"Chandni Chowk",[new Menu("veg Burger","vegetarian",28,120,"veg cheese burger"),
  new Menu("veg Chowmin","vegetarian",25,140,"Chineese dish chowmin"),
  new Menu("Chilli paneer","vegetarian",27,180,"North Indian Dish"),
  new Menu("kadai paneer","vegetarian",28,120,"cottage cheese dish made with butter"),
  new Menu("Dosa","vegetarian",28,120,"South Indian cuisine")]),
  new Hotel("Burger king",153,'../assets/images/img4.jpg',"900 for 2",4.5,"Civil Lines Delhi",[new Menu("veg Burger","vegetarian",28,120,"veg cheese burger"),
  new Menu("veg Chowmin","vegetarian",25,140,"Chineese dish chowmin"),
  new Menu("Chilli paneer","vegetarian",27,180,"North Indian Dish"),
  new Menu("kadai paneer","vegetarian",28,120,"cottage cheese dish made with butter"),
  new Menu("Dosa","vegetarian",28,120,"South Indian cuisine")]),
  new Hotel("Desi Tadka",163,'../assets/images/img5.jpg',"3900 for 2",4.5,"Civil Lines Delhi",[new Menu("veg Burger","vegetarian",28,120,"veg cheese burger"),
  new Menu("veg Chowmin","vegetarian",25,140,"Chineese dish chowmin"),
  new Menu("Chilli paneer","vegetarian",27,180,"North Indian Dish"),
  new Menu("kadai paneer","vegetarian",28,120,"cottage cheese dish made with butter"),
  new Menu("Dosa","vegetarian",28,120,"South Indian cuisine")]),
  new Hotel("Prakash Sweets",173,'../assets/images/img6.jpg',"1900 for 2",4.5,"Mukheri Nagar",[new Menu("veg Burger","vegetarian",28,120,"veg cheese burger"),
  new Menu("veg Chowmin","vegetarian",25,140,"Chineese dish chowmin"),
  new Menu("Chilli paneer","vegetarian",27,180,"North Indian Dish"),
  new Menu("kadai paneer","vegetarian",28,120,"cottage cheese dish made with butter"),
  new Menu("Dosa","vegetarian",28,120,"South Indian cuisine")]),
  new Hotel("Punjabi Dhaba",183,'../assets/images/img7.jpg',"600 for 2",4.5,"City Walk",[new Menu("veg Burger","vegetarian",28,120,"veg cheese burger"),
  new Menu("veg Chowmin","vegetarian",25,140,"Chineese dish chowmin"),
  new Menu("Chilli paneer","vegetarian",27,180,"North Indian Dish"),
  new Menu("kadai paneer","vegetarian",28,120,"cottage cheese dish made with butter"),
  new Menu("Dosa","vegetarian",28,120,"South Indian cuisine")]),
  new Hotel("Swish Delite",193,'../assets/images/img8.jpg',"400 for 2",4.5,"Civil Lines Delhi",[new Menu("veg Burger","vegetarian",28,120,"veg cheese burger"),
  new Menu("veg Chowmin","vegetarian",25,140,"Chineese dish chowmin"),
  new Menu("Chilli paneer","vegetarian",27,180,"North Indian Dish"),
  new Menu("kadai paneer","vegetarian",28,120,"cottage cheese dish made with butter"),
  new Menu("Dosa","vegetarian",28,120,"South Indian cuisine")])
]
private _url='assets/hotels.json'
hotel:Hotel
// hotels:Hotel[]
  constructor(private _httpClient:HttpClient) { }

  // hotel:Hotel
  gethotelList=():Hotel[]=>{
    // return this._httpClient.get<Hotel[]>(this._url);
    return this.hotels;
  }

  getHotelById(id:number):Hotel
  {
    this.hotels.forEach(hotel=>{
      if(hotel.hotelId==id){
        this.hotel=hotel
      }
    })
    
  //   this._httpClient.get<Hotel[]>(this._url).subscribe((data)=>{
  //    console.log(data)
  //    this.hotels=data
  //   })
  //   this.hotels.forEach(hotel=>{
  //     if(hotel.hotelId==id){
  //       this.hotel=hotel
  //     }
  //   })
    return this.hotel;
  }
}
