import { Directive, ElementRef, OnInit, Renderer2 ,HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appHostbindHighlight2]'
})
export class HostbindHighlight2Directive implements OnInit{

  constructor(private renderer:Renderer2,private elementRef:ElementRef) { }
  @HostBinding('style.backgroundColor') bgColor='green'
  ngOnInit(){
  this.renderer.setStyle(this.elementRef.nativeElement,'text-transform','uppercase')
  this.renderer.setStyle(this.elementRef.nativeElement,'letter-spacing','3px')
  }

  @HostListener('mouseenter')mouseEnter(dataEvent:Event){
    this.renderer.setStyle(this.elementRef.nativeElement,'text-transform','lowercase');
    this.renderer.setStyle(this.elementRef.nativeElement,'letter-spacing','10px');
    this.renderer.setStyle(this.elementRef.nativeElement,'font-weight','bold');
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color','yellow');
    
  }


  @HostListener('mouseleave')mouseexit(dataEvent:Event){
    this.renderer.setStyle(this.elementRef.nativeElement,'text-transform','uppercase');
    this.renderer.setStyle(this.elementRef.nativeElement,'letter-spacing','3px');
    this.renderer.setStyle(this.elementRef.nativeElement,'font-weight','normal');
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color',this.bgColor);
  }
}
