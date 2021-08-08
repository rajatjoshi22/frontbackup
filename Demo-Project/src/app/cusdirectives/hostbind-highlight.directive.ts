import { Directive,HostListener, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostbindHighlight]'
})
export class HostbindHighlightDirective implements OnInit {
@Input() defaultColor1=''
@Input()  highlightColor=''

@HostBinding('style.backgroundColor')headerbgColor='yellow'
  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }
ngOnInit(){
  this.headerbgColor=this.defaultColor1
}
@HostListener('mouseenter')mouseEnter(dataEvent:Event){
  this.renderer.setStyle(this.elementRef.nativeElement,'background-color',this.highlightColor);
  this.renderer.setStyle(this.elementRef.nativeElement,'letter-spacing','2px');
  
}


@HostListener('mouseleave')mouseexit(dataEvent:Event){
  this.renderer.setStyle(this.elementRef.nativeElement,'background-color',this.defaultColor1);
  this.renderer.setStyle(this.elementRef.nativeElement,'letter-spacing','0px');
}
  

}
