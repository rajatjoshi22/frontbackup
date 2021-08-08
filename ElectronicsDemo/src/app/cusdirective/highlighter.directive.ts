import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(private elementRef:ElementRef,private renderrer:Renderer2) { }
  @HostListener("mouseenter") mouseEnter(){
       this.renderrer.setStyle(this.elementRef.nativeElement,'text-transform','uppercase');
       this.renderrer.setStyle(this.elementRef.nativeElement,'font-weight','bolder');
  }
  @HostListener("mouseleave") mouseLeave(){
    this.renderrer.setStyle(this.elementRef.nativeElement,'text-transform','none');
    this.renderrer.setStyle(this.elementRef.nativeElement,'font-weight','normal');
}

}
