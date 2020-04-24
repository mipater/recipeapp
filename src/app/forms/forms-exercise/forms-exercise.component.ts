import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-forms-exercise',
  templateUrl: './forms-exercise.component.html',
  styleUrls: ['./forms-exercise.component.css']
})
export class FormsExerciseComponent {
  @ViewChild('form', {static: false}) form: NgForm;

  formData = {
    email: '',
    subscription: '',
    password: ''
  };

  submitted = false;

  onSubmit() {
    console.log(this.form.value);
    this.formData.email = this.form.value.email;
    this.formData.subscription = this.form.value.subscription;
    this.formData.password = this.form.value.password;
    this.submitted = true;
  }
}
