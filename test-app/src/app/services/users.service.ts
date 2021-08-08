import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
public _url="http://localhost:3000/enroll"
  constructor(private _httpClient:HttpClient) { }
  getEnroll(user:Users){
    return this._httpClient.post<any>(this._url,user);
  }
}
