import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  //usare renderer 2  per modifcare elemento è best practice invece di usare direttamente elementref
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultColor;
  }

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  //HOST--> fa riferimento a elemento a cui è attaccata la direttiva
  //con Hostbinding posso indicare la proprità dell'elemento a cui è attaccata la direttiva e cambiarla direttamente
  @HostBinding('style.backgroundColor') backgroundColor: string;
  //['$event'] va obbligatoriamente usata questa sintassi per accedere a info date da evento
  //non viene passato automaticamente come avviene in vanilla JS per esempio con eventi nativi
  @HostListener('mouseenter', ['$event']) mouseover(event: Event) {
    // console.log('prova', event);
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave() {
    // this.renderer.setStyle(
    //   this.el.nativeElement,
    //   'background-color',
    //   'transparent'
    // );
    this.backgroundColor = this.defaultColor;
  }
}
