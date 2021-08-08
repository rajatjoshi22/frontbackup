import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-showone',
  templateUrl: './showone.component.html',
  styleUrls: ['./showone.component.css']
})
export class ShowoneComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute,private _productService:ProductService) { }
public productId:number;
public product:Product;
public qty:number=0;
public message:string='*Check for avalability'
public zip:number[]=[530068,110001,230532]
public zipcode:number
public con:boolean
  ngOnInit() {
  this._activatedRoute.paramMap.subscribe((map:ParamMap)=>{
    this.productId=parseInt(map.get('productId'));
  })
  this._productService.getById(this.productId).subscribe(data=>{
   this.product=data;
  },error=>{
    console.log(error);
  },()=>{
    console.log(this.product);
  })
  }
 increment(){
   this.qty=this.qty+1;
 }
 decrement(){
   if(this.qty>0){
     this.qty=this.qty-1;
   }
 }
 check(){
   this.con=false;
   console.log('clicked');
   console.log(this.zipcode);
   this.zip.forEach(zipcode=>{
     if(zipcode==this.zipcode){
       this.con=true;
   }
    if(this.con){
      var ele:HTMLElement=document.getElementById('msg');
      ele.style.color='green';
      this.message='* delivery currently available';
    }else{
      var ele:HTMLElement=document.getElementById('msg');
      ele.style.color='red';
      this.message='* delivery currently not available';
    }

   })
    
   
 }
}
