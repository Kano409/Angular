import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'route';

  constructor(private router: Router) {}

  // dynamic routing
  getData() {
    this.router.navigate(['/abc']);
    console.log('this is dynamic routing');
  }
}
