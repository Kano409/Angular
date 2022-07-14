import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'indvsaus';

  @ViewChild('#form')
  maruForm: NgForm | any;

  email = '';
  subscription = '';
  password = '';

  onSubmitForm(form: NgForm) {
    console.log(form);
  }

  setAllValue() {
    console.log('set all value automatically');
    this.maruForm.setValue({
      email: 'kingpatel@gmail.com',
      subscription: 'basic',
      password: 'King_12345',
    });
  }
}
