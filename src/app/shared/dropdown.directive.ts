import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{
  elRef: ElementRef;
  renderer: Renderer2;
  @HostBinding('class.show') showClass;
  dropdownMenu;

  constructor(elRef: ElementRef, renderer: Renderer2) {
    this.elRef = elRef;
    this.renderer = renderer;
  }

  ngOnInit(): void {
    this.dropdownMenu = this.elRef.nativeElement.querySelector('.dropdown-menu');
  }

  @HostListener('document:click', ['$event']) mouseclick(event: Event) {
    if (this.elRef.nativeElement.contains(event.target) && undefined === this.showClass) {
      this.showClass = 'show';
      this.renderer.addClass(this.dropdownMenu, 'show');
    } else {
      this.showClass = undefined;
      this.renderer.removeClass(this.dropdownMenu, 'show');
    }
  }

}
