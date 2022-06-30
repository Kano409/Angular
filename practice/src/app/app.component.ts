import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'practice';
  signForm: FormGroup;
  Name: string = '';
  Email: string = '';
  Password: string = '';

  ngOnInit() {
    // this.signForm.get('Name')?.valueChanges.subscribe((uname) => {
    //   console.log(uname);
    // });

    // this.signForm.get('Name')?.statusChanges.subscribe((uname) => {
    //   console.log(uname);
    // });

    const array = new FormArray([
      new FormControl('Ram'),
      new FormControl('sita'),
    ]);
    console.log(array.value);
    console.log(array.status);
  }

  // getData(loginForm: any) {
  //   var name = loginForm.controls.Name.value;
  //   var email = loginForm.controls.Email.value;
  //   var password = loginForm.controls.Password.value;
  //   console.log(name + ' ' + email + ' ' + password);
  // }
  constructor(private formBuilder: FormBuilder) {
    this.signForm = formBuilder.group({
      //Name: new FormControl(),
      Name: ['', Validators.required],
      Email: new FormControl(),
      //Email: ['', Validators.required, Validators.email],
      Password: new FormControl(),
      //Password: ['', Validators.required, Validators.maxLength(10)],
    });
  }
  postData(signForm: any) {
    const name = signForm.controls.Name.value;
    const email = signForm.controls.Email.value;
    const password = signForm.controls.Password.value;
    console.log(name + ' ' + email + ' ' + password);
    //this.Name = this.signForm.get('Name')?.value;
    console.log(this.signForm.value);
  }

  resetData() {
    this.signForm.reset();
  }

  setData() {
    this.signForm.setValue({
      Name: 'king',
      Email: 'kingpatel0409@gmail.com',
      Password: 'King_12345',
    });
  }

  patchData() {
    this.signForm.patchValue({
      Name: 'king',
      Email: 'kingpatel0409@gmail.com',
      //Password: 'King_12345',
    });
  }
}
