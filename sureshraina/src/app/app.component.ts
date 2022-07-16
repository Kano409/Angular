import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  genders = ["male", "female"];
  signUpForm: FormGroup;
  submitted = false;
  ngOnInit() {
    this.signUpForm = new FormGroup({
      // 1st parameter -> initial value of control
      // 2nd parameter -> single or array as a validater
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl("male", Validators.required),
      hobbies: new FormArray([]),
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.signUpForm);
  }
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get("hobbies")).push(control);
  }

  setDefault() {
    this.signUpForm.setValue({
      username: "king",
      email: "kingpatel0409@gmail.com",
      gender: "male",
      hobbies: [],
    });
  }
}
