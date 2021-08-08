import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private _httpClient:HttpClient) { }
  getAllStates=()=>{
    let _url='../assets/cities.json'
   return this._httpClient.get<any>(_url);
  }
 
  userSignup(user:User){
    let _url="http://localhost:8089/movie-api/user"
    return this._httpClient.post<any>(_url,user);
  }
  userLogin(loginId:string,password:string){
    let _url="http://localhost:8089/movie-api/user?loginId="+loginId+"&password="+password;
    return this._httpClient.get<any>(_url);
  }

  getOrders(loginId:string){
    let _url="http://localhost:8089/movie-api/orders?loginId="+loginId;
    return this._httpClient.get<any>(_url);
  }

  getCarts(loginId:string){
    let _url="http://localhost:8089/movie-api/cart?loginId="+loginId;
    return this._httpClient.get<any>(_url);
  }


  getUserById(loginId:string){
    let _url="http://localhost:8089/movie-api/user-by-id?loginId="+loginId;
    return  this._httpClient.get<any>(_url);
  }

updateUser(user:User){
  let _url="http://localhost:8089/movie-api/user";
  return this._httpClient.put<any>(_url,user);
}

}
