import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieGenreComponent } from '../movie-genre/movie-genre.component';
import { MovieLanguageComponent } from '../movie-language/movie-language.component';
import { BySearchUserComponent } from './by-search-user/by-search-user.component';
import { CartComponent } from './cart/cart.component';
import { ChangedetailsComponent } from './changedetails/changedetails.component';
import { DeletebookingComponent } from './deletebooking/deletebooking.component';
import { OrdersComponent } from './orders/orders.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';




const routes: Routes = [
  {path:'user',component:UserdashboardComponent,children:[
    {path:'show-cart',component:CartComponent},
  {path:'orders',component:OrdersComponent},
  {path:'delete-order/:orderId',component:DeletebookingComponent},
  {path:'change-details',component:ChangedetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
