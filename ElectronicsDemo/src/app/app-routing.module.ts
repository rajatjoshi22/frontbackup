import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessoriesComponent } from './accessories/accessories.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { MobileComponent } from './mobile/mobile.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'mobile',component:MobileComponent},
  {path:'accessories',component:AccessoriesComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
