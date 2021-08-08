import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNumberMultiply]'
})
export class NumberMultiplyDirective {

  @Input() set appNumberMultiply(count:number){

    for(let index=0;index<count;index++){
      this._viewContainer.createEmbeddedView(this._templateRef);
    }

 }
 constructor(private _templateRef:TemplateRef<any>,private _viewContainer:ViewContainerRef) { }

}
