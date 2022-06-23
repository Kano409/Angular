import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log(localStorage.getItem('localData'));
    console.log(sessionStorage.getItem('sesssionData'));
  }
}
