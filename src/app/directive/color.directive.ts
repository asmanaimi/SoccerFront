import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  

constructor(private el:ElementRef) { }

@HostListener('mouseenter') onMouseEnter(){
  this.changeColor('red');
  }
  @HostListener('mouseleave') onMouseLeave(){
  this.changeColor(null) }
  changeColor(color:any) {
  this.el.nativeElement.style.backgroundColor = color;
  }

}
