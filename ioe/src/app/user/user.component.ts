import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor() {}

  message: string = '';
  counter: number = 0;
  ngOnInit(): void {}
  @Input() title: any;
  @Input() desc: any;
  @Input() url: any;
  @Output() editData = new EventEmitter();

  getData() {
    this.editData.emit('hello');
  }
  add() {
    this.counter += 1;
    this.message = 'counter : ' + this.counter;
  }

  sub() {
    this.counter -= 1;
    this.message = 'counter : ' + this.counter;
  }
}
