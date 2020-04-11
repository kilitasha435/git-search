import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  // highlight: any;

  constructor(private elem:ElementRef) { }

  @HostListener ('mouseenter') onMouseEnter(){
    this.highlight('green');
  }

  @HostListener ('mouseleave') onMouseleave(){
    this.highlight(null);
  }

  private highlight(color:string){
     this.elem.nativeElement.style.backgroundColor = color;
  }

}
