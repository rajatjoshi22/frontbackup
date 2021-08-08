import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { DineoutComponent } from './dineout/dineout.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddpipePipe } from './pipes/addpipe.pipe';
import { DeliveryDetailsComponent } from './delivery-details/delivery-details.component';
import { HttpClientModule } from '@angular/common/http';
import { DineoutdetailsComponent } from './dineoutdetails/dineoutdetails.component';
import { ShowmenuComponent } from './showmenu/showmenu.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeliveryComponent,
    DineoutComponent,
    NutritionComponent,
    PagenotfoundComponent,
    AddpipePipe,
    DeliveryDetailsComponent,
    DineoutdetailsComponent,
    ShowmenuComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
