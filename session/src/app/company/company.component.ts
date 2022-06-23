import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let employee = {
      name: 'kano',
      salary: 10000,
    };
    localStorage.setItem('myObject', JSON.stringify(employee));
    let item = JSON.parse(localStorage.getItem('myObject') || '{}');

    console.log(item.name);

    localStorage.setItem('localData', 'local storage');
    sessionStorage.setItem('sesssionData', 'session storage');
    // update
    localStorage.setItem('localData', 'local storage....!');

    console.log(localStorage.getItem('localData'));
    console.log(sessionStorage.getItem('sesssionData'));

    // delete
    // localStorage.removeItem('localData');

    // clear
    // sessionStorage.clear();

    // console.log(localStorage.getItem('localData'));
    // console.log(sessionStorage.getItem('sesssionData'));

    if (sessionStorage.length > 0) {
      alert('session is available');
    } else {
      alert('session is not available');
    }

    if (window.sessionStorage) {
      alert('session is support');
    } else {
      alert('session is not support');
    }
  }
}
