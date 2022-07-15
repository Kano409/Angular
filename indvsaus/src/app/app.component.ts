import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('form')
  maruForm!: NgForm;
  title = 'indvsaus';
  formSubmitted = false;

  email = '';
  subscription = '';
  password = '';

  onSubmitForm(form: NgForm) {
    this.formSubmitted = true;
    console.log(form);
  }

  setAllValue() {
    console.log('set all value automatically');
    // setvalue()
    this.maruForm.setValue({
      email: 'kingpatel@gmail.com',
      subscription: 'basic',
      password: 'King_12345',
    });
  }
}
