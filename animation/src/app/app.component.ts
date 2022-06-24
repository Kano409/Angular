import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  transition,
  trigger,
  animation,
  style,
  state,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('FadeInFadeOut', [
      state(
        'void',
        style({
          display: 'none',
        })
      ),

      state(
        '*',
        style({
          background: 'cyan',
        })
      ),

      transition('void => *', [animate(2000)]),
      transition('* => void', [animate(2000)]),
    ]),
  ],
})
export class AppComponent {
  title = 'animation';
  item: any = [];

  constructor() {}

  ngOnInit() {}
  newItem = '';
  addNew() {
    if (this.newItem != '') {
      this.item.push(this.newItem);
      this.newItem = '';
    }
  }
  remove(index: any) {
    console.log(index);
    this.item.splice(index, 1);
  }
}
