import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css'],
})
export class ReactiveformComponent implements OnInit {
  ngOnInit(): void {}

  loginForm: FormGroup;
  Name: string = '';
  Email: string = '';
  Pasword: string = '';

  constructor(private fromBuilder: FormBuilder) {
    this.loginForm = fromBuilder.group({
      myName: new FormControl(),
      myEmail: new FormControl(),
      myPassword: new FormControl(),
    });
  }

  name: any;
  getData(item: any) {
    console.log(item);
  }

  postData(loginForm: any) {
    // data binding -> change here, change at page
    this.Name = loginForm.controls.myName.value;
    this.Email = loginForm.controls.myEmail.value;
    this.Pasword = loginForm.controls.myName.value;
    console.log(loginForm);
  }
}
