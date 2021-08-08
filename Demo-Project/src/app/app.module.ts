import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StrDirectiveComponent } from './strdirective/strdirective.component';
import { AttributedirectiveComponent } from './attributedirective/attributedirective.component';
import { BasicHighlightDirective } from './cusdirectives/basic-highlight.directive';
import { BetterHighlightDirective } from './cusdirectives/better-highlight.directive';
import { HostHighlightDirective } from './cusdirectives/host-highlight.directive';
import { HostbindHighlightDirective } from './cusdirectives/hostbind-highlight.directive';
import { HostbindHighlight2Directive } from './cusdirectives/hostbind-highlight2.directive';
import { NotifDirective } from './cusdirectives/notif.directive';
import { NamecheckDirective } from './cusdirectives/namecheck.directive';
import { NumberloopDirective } from './cusdirectives/numberloop.directive';
import { ArrayloopDirective } from './cusdirectives/arrayloop.directive';
import { ServiceExampleComponent } from './service-example/service-example.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { PipeexampleComponent } from './pipeexample/pipeexample.component';
import { TitlePipe } from './custpipes/title.pipe';
import { FilterPipe } from './custpipes/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ObserveComponent } from './observe/observe.component';
import { CustomObserveComponent } from './custom-observe/custom-observe.component';
import { AdminModule } from './admin/admin.module';
@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    BindingComponent,
    StrDirectiveComponent,
    AttributedirectiveComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    HostHighlightDirective,
    HostbindHighlightDirective,
    HostbindHighlight2Directive,
    NotifDirective,
    NamecheckDirective,
    NumberloopDirective,
    ArrayloopDirective,
    ServiceExampleComponent,
    LifecycleComponent,
    PipeexampleComponent,
    TitlePipe,
    FilterPipe,
    AsyncPipeComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent,
    ObserveComponent,
    CustomObserveComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AdminModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
