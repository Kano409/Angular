import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'practice7';

  inputVariable = 'this is parent compnent';

  saveData(value: any) {
    console.log(value);
  }
}
