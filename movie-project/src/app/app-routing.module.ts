import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AddToOrderComponent } from './add-to-order/add-to-order.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { MovieGenreComponent } from './movie-genre/movie-genre.component';
import { MovieLanguageComponent } from './movie-language/movie-language.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { PaymentgatewayComponent } from './paymentgateway/paymentgateway.component';
import { SearchComponent } from './search/search.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ShowOneComponent } from './show-one/show-one.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './user/cart/cart.component';

const routes: Routes = [
  {path:'home',component:MovieListComponent},
  {path:'movie-by-genre/:genre',component:MovieGenreComponent},
  {path:'movie-by-language/:language',component:MovieLanguageComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'showOne/:movieId',component:ShowOneComponent},
  {path:'add-to-order/:movieId',component:AddToOrderComponent,canActivate:[AuthGuardService]},
  {path:'add-to-cart/:movieId',component:AddToCartComponent,canActivate:[AuthGuardService]},
  {path:'payment-gateway',component:PaymentgatewayComponent},
  {path:'choice-list/:choice',component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
