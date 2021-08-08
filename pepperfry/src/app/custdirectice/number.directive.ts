import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNumber]'
})
export class NumberDirective {
  @Input() set appNumber(count:number){
   
    for(let index=0;index<count;index++){
      this._viewContainer.createEmbeddedView(this._temRef);
    }
  }
  constructor(private _temRef:TemplateRef<any>,private _viewContainer:ViewContainerRef) { }

}
