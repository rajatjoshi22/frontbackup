import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appArrayloop]'
})
export class ArrayloopDirective {
  @Input() set appArrayloop(values:string[]){
     values.forEach(value=>{
       this.viewContainer.createEmbeddedView(this.templateRef);
     })
  }
  constructor(private templateRef:TemplateRef<any>,private viewContainer:ViewContainerRef ) { }

}
