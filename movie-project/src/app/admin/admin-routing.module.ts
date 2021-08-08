import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { EditmovieComponent } from './editmovie/editmovie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';


const routes: Routes = [
  {path:'admin',component:AdminDashboardComponent,children:[
    {path:'add-movie',component:AddMovieComponent},
    {path:'update-movie',component:UpdateMovieComponent,children:[
      {path:'edit-movie/:movieId',component:EditmovieComponent}
    ]},
  { path:'delete-movie',component:DeleteMovieComponent}  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
export const routingComponents=[AdminDashboardComponent,AddMovieComponent,UpdateMovieComponent,DeleteMovieComponent]
