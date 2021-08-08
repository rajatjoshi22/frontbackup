import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryDetailsComponent } from './delivery-details/delivery-details.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { DineoutComponent } from './dineout/dineout.component';
import { DineoutdetailsComponent } from './dineoutdetails/dineoutdetails.component';
import { HomeComponent } from './home/home.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShowmenuComponent } from './showmenu/showmenu.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'delivery',component:DeliveryComponent},
  {path:'delivery/:id',component:DeliveryDetailsComponent,
children:[
  {path:'showmenu/:id',component:ShowmenuComponent}
]},
  {path:'dineout',component:DineoutComponent,
children:[
  {path:'dineoutdetails/:id',component:DineoutdetailsComponent}
]},
  {path:'nutrition',component:NutritionComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
