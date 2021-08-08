import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _productService:ProductService) { }
public products:Product[]

  ngOnInit() {
    this._productService.getProducts().subscribe(data=>{
     this.products=data;
    },error=>{
      console.log(error);
    },()=>{
      console.log(this.products);
    })
  }

}
