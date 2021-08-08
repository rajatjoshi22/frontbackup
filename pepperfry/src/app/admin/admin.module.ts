import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

@NgModule({
  declarations: [AdminDashboardComponent, AddProductComponent, DeleteProductComponent, UpdateProductComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
