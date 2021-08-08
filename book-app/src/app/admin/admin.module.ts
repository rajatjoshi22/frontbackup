import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookAddComponent } from './book-add/book-add.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { AdminRoutingModule,routingComponents } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookEditComponent } from './book-edit/book-edit.component';
import { LoginComponent } from './login/login.component';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [routingComponents, LoginComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
   
     ],
  exports:[AdminRoutingModule],
  providers:[AdminModule]
})
export class AdminModule { }
