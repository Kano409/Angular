import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChangecolorDirective } from '../changecolor.directive';

@Component({
  selector: 'app-parent-color',
  templateUrl: './parent-color.component.html',
  styleUrls: ['./parent-color.component.css'],
})
export class ParentColorComponent implements OnInit {
  @ViewChild(ChangecolorDirective) changecolorDirective!: ChangecolorDirective;
  constructor() {}

  colorChanged(changeColor: string) {
    this.changecolorDirective.change(changeColor);
  }
  ngOnInit(): void {}
}
