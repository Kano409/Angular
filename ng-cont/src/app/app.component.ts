import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-cont';
  available: any = true;
  books = [
    {
      id: 1,
      name: 'Java',
    },
    {
      id: 2,
      name: 'React Js',
    },
    {
      id: 3,
      name: '.Net Core',
    },
    {
      id: 4,
      name: 'Angular',
    },
  ];
}
