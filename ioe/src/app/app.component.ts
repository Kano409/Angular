import { Component, ViewChild } from '@angular/core';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ioe';

  @ViewChild(UserComponent)
  messsage: string = '';
  counter: number = 0;
  private userComponent = new UserComponent();

  increaseOne() {
    this.userComponent.add();
  }
  decreaseOne() {
    this.userComponent.sub();
  }

  passingData() {
    console.log('hello data');
  }
}
