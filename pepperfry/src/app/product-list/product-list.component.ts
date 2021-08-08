import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute,private _productService:ProductService) { }

  public categoryName:string;
  public type:string;
  public brands:string[]=[
"DZYN Furnitures",
"Adiko Systems",
"Nilkamal",
"Creative Seating System",
"Bantia Furniture",
"Durian",
"Furniease",
"Evok",
"Home Centre",
"Home Style",
"VJ Interior",
"VOF"
  ]
  public products:Product[]
  public length:number;
  public showProd:Product[];
  public tempProd:Product[];
  ngOnInit() {

    this._activatedRoute.paramMap.subscribe((map:ParamMap)=>{
      this.categoryName=map.get('category');
      console.log(this.categoryName);
      this.type=map.get('type');
      console.log(this.type);
      this._productService.getByCatAndType(this.categoryName,this.type).subscribe(data=>{
      this.products=data;
      this.showProd=this.products;
      this.tempProd=this.products;
      this.length=this.products.length;
      },error=>{
        console.log(error);
      },()=>{
        console.log(this.products);
      })
    })
  }
bAdd(brand:string){


  console.log(brand);
  this.showProd=[]
  this.tempProd=[]
  this.products.forEach(product=>{
    if(product.brand.brandName==brand){
      this.showProd.push(product);
    }
    this.tempProd=this.showProd;
    this.length=this.showProd.length;
  })
}
pAdd(price:number){
this.showProd=this.tempProd.filter((product,index,arr)=>{
  return product.price<price;
}
)
this.length=this.showProd.length
}
sAdd(rating:number){
  this.showProd=this.tempProd.filter((product,index,arr)=>{
    return rating==Math.ceil(product.ratings);
  })
  this.length=this.showProd.length
}
}
