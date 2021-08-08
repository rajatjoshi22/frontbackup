import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { Movie } from '../models/movie';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _httpClient:HttpClient) { }

  addMovie(movie:Movie){
    let _url='http://localhost:8089/movie-api/movie'
    return this._httpClient.post<any>(_url,movie);
  }

  getAllMovies(){
    let _url='http://localhost:8089/movie-api/movies'
    return this._httpClient.get<any>(_url);
  }

  getByGenre(genreName:string){
 let _url="http://localhost:8089/movie-api/movies-by-genre?genreName="+genreName;
 return this._httpClient.get<any>(_url);
  }

  getByLanguage(language:string){
    let _url="http://localhost:8089/movie-api/movies-by-language?language="+language;
    return this._httpClient.get<any>(_url);
  }

  getById(movieId:number){
    let _url="http://localhost:8089/movie-api/movie?movieId="+movieId;
    return this._httpClient.get<any>(_url);
  }

  addOrder(order:Order){
    let _url="http://localhost:8089/movie-api/order"
    return this._httpClient.post<any>(_url,order);
  }

  addToCart(cart:Cart){
    let _url="http://localhost:8089/movie-api/cart"
    return this._httpClient.post<any>(_url,cart);
  }

  deleteMovie(movieId:number){
    let _url="http://localhost:8089/movie-api/movie?movieId="+movieId;
    return this._httpClient.delete<any>(_url);
  }

  updateMovie(movie:Movie){
    let _url="http://localhost:8089/movie-api/movie";
    return this._httpClient.put<any>(_url,movie);
  }



  getByChoice(choice:string){
    let _url="http://localhost:8089/movie-api/movies-by-choice?choice="+choice;
    return this._httpClient.get<any>(_url);
  }
  deleteOrder(orderId:number){
    let _url="http://localhost:8089/movie-api/order?orderId="+orderId;
    return this._httpClient.delete<any>(_url);
  }

  getByCity(city:string){
    let _url="http://localhost:8089/movie-api/movies-by-city?city="+city;
    return this._httpClient.get<any>(_url);
  }
}
