import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileComponent } from './mobile/mobile.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { HighlighterDirective } from './cusdirective/highlighter.directive';
import { AddpipePipe } from './pipes/addpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MobileComponent,
    AccessoriesComponent,
    HomeComponent,
    ErrorComponent,
    HighlighterDirective,
    AddpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
