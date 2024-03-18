import { Directive, ElementRef, HostListener, Renderer2  } from '@angular/core';

@Directive({
  selector: '[appProductCard]',
  standalone: true
})
export class ProductCardDirective {
  @HostListener ('mouseover')onMouseOver(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'box-shadow', ' 5px 5px 8px blue, 10px 10px 8px red, 15px 15px 8px green');

  }
  @HostListener ('mouseout')onMouseOut(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'box-shadow','none');

  }
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

    elementRef.nativeElement.style.borderRadius='5px';
  }

  }
 
  


