import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { MovieGenreComponent } from './movie-genre/movie-genre.component';
import { MovieLanguageComponent } from './movie-language/movie-language.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { UserModule } from './user/user.module';
import { UserRoutingModule } from './user/user-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ShowOneComponent } from './show-one/show-one.component';
import { NumberforDirectiveDirective } from './custDirectives/numberfor-directive.directive';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AddToOrderComponent } from './add-to-order/add-to-order.component';
import { PaymentgatewayComponent } from './paymentgateway/paymentgateway.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    MovieGenreComponent,
    MovieLanguageComponent,
    MovieListComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    ShowOneComponent,
    NumberforDirectiveDirective,
    AddToCartComponent,
    AddToOrderComponent,
    PaymentgatewayComponent,
    FooterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    AdminRoutingModule,
    UserModule,
    UserRoutingModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
