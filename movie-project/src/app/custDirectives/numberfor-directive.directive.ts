import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNumberforDirective]'
})
export class NumberforDirectiveDirective {
  @Input() set appNumberforDirective(count:number){

     for(let index=0;index<count;index++){
       this._viewContainer.createEmbeddedView(this._templateRef);
     }

  }
  constructor(private _templateRef:TemplateRef<any>,private _viewContainer:ViewContainerRef) { }

}
