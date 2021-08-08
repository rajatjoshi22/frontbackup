import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMovieHighlighter]'
})
export class MovieHighlighterDirective {

  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }
  @HostListener('mouseenter')mouseEnter(){
   this.renderer.setStyle(this.elementRef.nativeElement,'text-transform','uppercase');
   this.renderer.setStyle(this.elementRef.nativeElement,'color','red');

  }
  @HostListener('mouseleave')mouseLeave(){
    this.renderer.setStyle(this.elementRef.nativeElement,'text-transform','none');
    this.renderer.setStyle(this.elementRef.nativeElement,'color','black');
 
   }

}
