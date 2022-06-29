import { Component } from '@angular/core';
import { GoodbyeComponent } from './goodbye/goodbye.component';
import { HelloComponent } from './hello/hello.component';
import { HiComponent } from './hi/hi.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dycomp';
  say: any;

  constructor() {}

  ngOnInit() {
    this.say = HiComponent;
  }

  sayGoodBye() {
    this.say = GoodbyeComponent;
  }

  sayHello() {
    this.say = HelloComponent;
  }

  sayHi() {
    this.say = HiComponent;
  }
}
