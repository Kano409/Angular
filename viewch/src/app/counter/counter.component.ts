import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  message:string = '';
  counter:number = 0;
  constructor() { }

  increaseOne(){
    this.counter += 1;
    this.message = "count  : " + this.counter;
  }

  decreaseOne(){
    this.counter -= 1;
    this.message = "count  : " + this.counter;
  }

  ngOnInit(): void {
  }

}
