import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddbookComponent } from './addbook/addbook.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BookService } from './service/book.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddbookComponent, UpdatebookComponent, AdminDashboardComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[ AdminDashboardComponent],
  providers:[BookService]
})
export class AdminModule { }
