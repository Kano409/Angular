import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  constructor() {}

  @Input() myInput: string | any;
  @Output() myOutput: EventEmitter<string> = new EventEmitter();

  otString = 'this is child component';

  getData() {
    this.myOutput.emit(this.otString);
  }

  ngOnInit(): void {
    console.log(this.myInput);
  }
}
