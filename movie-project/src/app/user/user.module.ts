import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { BySearchUserComponent } from './by-search-user/by-search-user.component';
import { UserRoutingModule } from './user-routing.module';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { NumberforDirectiveDirective } from '../custDirectives/numberfor-directive.directive';
import { NumberMultiplyDirective } from './number-multiply.directive';
import { DeletebookingComponent } from './deletebooking/deletebooking.component';
import { ChangedetailsComponent } from './changedetails/changedetails.component';

@NgModule({
  declarations: [UserdashboardComponent,  BySearchUserComponent, CartComponent, OrdersComponent, NumberMultiplyDirective, DeletebookingComponent, ChangedetailsComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class UserModule { }
