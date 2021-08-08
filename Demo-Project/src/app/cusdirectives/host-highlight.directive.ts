import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { Event } from '@angular/router';

@Directive({
  selector: '[appHostHighlight]'
})
export class HostHighlightDirective implements OnInit {

  constructor(private renderer:Renderer2,private elementRef:ElementRef) { }
  ngOnInit(){
    this.renderer.setStyle(this.elementRef.nativeElement,'color','green');
  }

  @HostListener('mouseenter')mouseEnter(dataEvent:Event){
    this.renderer.setStyle(this.elementRef.nativeElement,'color','grey');
    this.renderer.setStyle(this.elementRef.nativeElement,'letter-spacing','2px');
    
  }


  @HostListener('mouseleave')mouseexit(dataEvent:Event){
    this.renderer.setStyle(this.elementRef.nativeElement,'color','green');
    this.renderer.setStyle(this.elementRef.nativeElement,'letter-spacing','0px');
  }
}
