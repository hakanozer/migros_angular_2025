import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appPtitle]',
  standalone: true
})
export class PtitleDirective {

  @Input() title = ''

  constructor( private element: ElementRef ) { }

  ngOnInit(): void {
      //const title = this.element.nativeElement.innerText
      this.element.nativeElement.innerHTML = '<h3 class="text-danger"><i class="bi bi-arrow-right-short"></i> '+this.title+'</h3>'
  }

}
