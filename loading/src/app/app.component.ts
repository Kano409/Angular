import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'loading';
  list: any[] = [
    {
      name: 'apple',
      country: 'usa',
    },
    {
      name: 'tcs',
      country: 'india',
    },
  ];

  constructor(private router: Router) {}

  getRoute() {
    this.router.navigate(['/person']);
    console.log('dynamic routing....!');
  }
}
