import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNumberloop]'
})
export class NumberloopDirective {

  @Input() set appNumberloop(iterartor:number){

    for(var index=0;index<iterartor;index++){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
  constructor(private templateRef:TemplateRef<any>,private viewContainer:ViewContainerRef ) { }

}
