import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appifNot]'
})
export class NotifDirective {


  @Input() set appifNot(condition:boolean){
    if(!condition){
      this.viewContainer.createEmbeddedView(this.templateRef)
    }else{
        this.viewContainer.clear();
    }
  }
  constructor(private templateRef:TemplateRef<any>,private viewContainer:ViewContainerRef) { }

}
