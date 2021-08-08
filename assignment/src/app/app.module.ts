import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { DirectiveassignComponent } from './directiveassign/directiveassign.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ReversePipe } from './custpipes/reverse.pipe';
import { MoneyPipe } from './custpipes/money.pipe';
import { PipeComponent } from './pipe/pipe.component';
import { TimePipe } from './custpipes/time.pipe';
import { ConverterPipe } from './custpipes/converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Assignment1Component,
    DirectiveassignComponent,
    ParentComponent,
    ChildComponent,
    ReversePipe,
    MoneyPipe,
    PipeComponent,
    TimePipe,
    ConverterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
