import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   public products:Product[]=[new Product('mobile','Samsung',345,'gadget',21000),
   new Product('headphone','boat',445,'gadget',2100),
   new Product('t-shirt','U.S polo',945,'clothing',1800),
   new Product('pen','cello',1045,'stationary',10),
   new Product('football','cosco',745,'sports',745)
  ]
  constructor() { }

  getAllproducts():Observable<Product[]>{
     return of(this.products);
  }
}
