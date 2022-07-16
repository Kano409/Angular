import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'indvseng';
  pStatus = ['Stable', 'Critical', 'Finished'];
  signUpForm: FormGroup | any;
  submittedForm = false;

  ngOnInit() {
    this.signUpForm = new FormGroup({
      pname: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    this.submittedForm = true;
    console.log(this.signUpForm);
  }
}
