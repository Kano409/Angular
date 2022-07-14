import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("form") myForm: NgForm;
  defaultQuestion = "teacher";
  answer = "";
  genders = ["male", "female"];
  user = {
    username: "",
    email: "",
    secret: "",
    gender: "",
    questionAnswer: "",
  };
  submittedForm = false;

  suggestUserName() {
    const suggestedName = "Superuser";
    // Overwrite all values at once (not best in this scenario)
    // this.form.setValue({
    //   userData: { username: suggestedName, email: "" },
    //   secret: "pet",
    //   questionAnswer: "",
    //   gender: "male",
    // });
    // Overwrite only some values
    this.myForm.form.patchValue({
      userData: { username: suggestedName, email: "kingpatel0409@gmailc.om" },
      secret: "pet",
      gender: "male",
      questionAnswer: "I am work in La Net",
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.myForm);
    this.submittedForm = true;
    this.user.username = this.myForm.value.userData.username;
    this.user.email = this.myForm.value.userData.email;
    this.user.secret = this.myForm.value.secret;
    this.user.gender = this.myForm.value.gender;
    this.user.questionAnswer = this.myForm.value.questionAnswer;
  }
}
