import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { AdminRoutingModule, routingComponents } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditmovieComponent } from './editmovie/editmovie.component';

@NgModule({
  declarations: [routingComponents, EditmovieComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
