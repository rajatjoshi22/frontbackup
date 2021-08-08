import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { CartComponent } from './cart/cart.component';
import { ChoiceListComponent } from './choice-list/choice-list.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'friction',component:BookListComponent,data:{id:1,name:'fiction'}},
  {path:'children',component:BookListComponent,data:{id:1,name:'children'}},
  {path:'technical',component:BookListComponent,data:{id:1,name:'technical'}},
  {path:'selfhelp',component:BookListComponent,data:{id:1,name:'selfhelp'}},
  {path:'health',component:BookListComponent,data:{id:1,name:'health'}},
  {path:'',redirectTo:"home",pathMatch:"full"},
  {path:'book-details/:id',component:BookDetailsComponent},
  {path:'cart/:id',component:CartComponent},
  {path:'choice-list/:choice',component:ChoiceListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
