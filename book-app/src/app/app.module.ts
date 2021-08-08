import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { HeaderComponent } from './header/header.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ErrorComponent } from './error/error.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { CartComponent } from './cart/cart.component';
import { WildCardRoutingModule } from './wildcard-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChoiceListComponent } from './choice-list/choice-list.component';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookListComponent,
    BookDetailsComponent,
    ErrorComponent,
    CartComponent,
    ChoiceListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminRoutingModule,
    FormsModule,
    AdminModule,
    WildCardRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot()
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
