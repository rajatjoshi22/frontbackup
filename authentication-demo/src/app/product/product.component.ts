import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public productService:ProductService) { }
 products:Product[]
  ngOnInit() {
    this.productService.getAllproducts().subscribe(data=>{
      this.products=data;
    },error=>{
      console.log(error);
    })
  }

}
