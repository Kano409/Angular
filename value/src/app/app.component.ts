import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormArray,
  NgForm,
  FormControlName,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'value';
  FormGroup: FormGroup | undefined;

  form: any;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      ContactNos: new FormArray([
        new FormControl('12345'),
        new FormControl('67890'),
      ]),
    });
  }
  onClick() {
    console.log(this.form.get('ContactUsNo').value);
    console.log(this.form.value);
  }

  addNewNo() {
    this.form.get('ContactUsNo').push(new FormControl());
  }

  resetNo() {
    this.form.get('ContactUsNo').patchValue(['12345'], ['67890']);
  }
}
