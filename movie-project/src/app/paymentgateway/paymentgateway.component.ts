import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paymentgateway',
  templateUrl: './paymentgateway.component.html',
  styleUrls: ['./paymentgateway.component.css']
})
export class PaymentgatewayComponent implements OnInit {
public firstname
public lastname
public number
public expiry
public ccv
public streetaddress
public city
public zipcode
public email

  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log('clicked');
  }
}
