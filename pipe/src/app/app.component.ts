import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pipe';

  employee: any[] = [
    {
      id: 101,
      name: 'King',
      salary: 10000,
      gender:'male',
      dob: '04/sept/1999',
    },
    {
      id: 102,
      name: 'Ruchita',
      salary: 20000,
      gender:'female',
      dob: '26/march/1985',
    },
    {
      id: 103,
      name: 'Abhu',
      salary: 30000,
      gender:'female',
      dob: '17/oct/1974',
    },
    {
      id: 104,
      name: 'Rajesh',
      salary: 40000,
      gender:'male',
      dob: '05/jun/1964',
    },
    {
      id: 105,
      name: 'Meena',
      salary: 50000,
      gender:'female',
      dob: '16/april/1980',
    },
  ];

  dob = new Date(1947, 7, 15);

  profession: string = 'Software Developer';

  myNumber: number = 0.16798765488;
}
