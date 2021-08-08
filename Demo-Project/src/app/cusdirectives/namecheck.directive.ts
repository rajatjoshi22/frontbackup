import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNamecheck]'
})


export class NamecheckDirective {

  public names:string[]=["Rajat","Rohan","Zeus"];
  @Input() set appNamecheck(name:string){
    if(this.names.includes(name)){
    this.viewContainer.createEmbeddedView(this.templateRef)
    }else{
      this.viewContainer.clear();
    }
  }
  constructor(private templateRef:TemplateRef<any>,private viewContainer:ViewContainerRef) { }

}
