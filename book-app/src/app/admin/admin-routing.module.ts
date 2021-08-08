import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
 {path:'admin',component:LoginComponent},
   {path:'admin-dashboard',component:AdminDashboardComponent,children:[
   {path:'add-book',component:BookAddComponent},
   {path:'delete-book',component:BookDeleteComponent},
 {path:'edit-book',component:BookEditComponent,children:[{path:'update-book/:id',component:BookUpdateComponent}]}]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
export const routingComponents=[AdminDashboardComponent,BookAddComponent,BookDeleteComponent,BookUpdateComponent,BookEditComponent]