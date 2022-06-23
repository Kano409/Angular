import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appChangecolor]',
})
export class ChangecolorDirective implements AfterViewInit {

  constructor(private elref:ElementRef) {}

  ngAfterViewInit(): void {
    this.elref.nativeElement.style.color = 'red';
  }

  change(changecolor:string){
    this.elref.nativeElement.style.color = changecolor;
  }

}
