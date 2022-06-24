import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'holist';

  temp: any = true;
  constructor(private ele: ElementRef, private render: Renderer2) {}

  @HostListener('click') onClick() {
    alert('display using host listner');
    this.changeColor('red');
  }

  changeColor(color: string) {
    this.render.setStyle(this.ele.nativeElement, 'color', color);
  }

  students = [
    { name: 'king', class: 'mca' },
    { name: 'abhu', class: 'btech' },
  ];
}
