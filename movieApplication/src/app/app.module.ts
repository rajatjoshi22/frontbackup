import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieParentComponent } from './movie-parent/movie-parent.component';
import { MoviechildComponent } from './moviechild/moviechild.component';
import { MovieHighlighterDirective } from './cusdirectives/movie-highlighter.directive';

@NgModule({
  declarations: [
    AppComponent,
    MovieParentComponent,
    MoviechildComponent,
    MovieHighlighterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
