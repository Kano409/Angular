import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'practice9';
  say: any;

  ngOnInit() {}
  constructor() {}
  @ViewChild(ParentComponent) parentComponent!: ParentComponent;

  message() {
    this.parentComponent.msg();
  }

  hello() {
    this.say = ChildComponent;
  }

  hi() {
    this.say = ParentComponent;
  }
}
