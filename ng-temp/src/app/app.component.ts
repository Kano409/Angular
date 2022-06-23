import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-temp';
  display: boolean = true;
  employee = [
    {id:1, name:'kano'},
    {id:2, name:'abhu'},
    {id:3, name:'rudra'},
    {id:4, name:'shivansh'}
  ];
}
