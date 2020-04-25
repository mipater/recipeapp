import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {log} from 'util';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-reactive-form-exercise',
  templateUrl: './reactive-form-exercise.component.html',
  styleUrls: ['./reactive-form-exercise.component.css']
})
export class ReactiveFormExerciseComponent implements OnInit {
  projectForm: FormGroup;
  statusValues = ['Stable', 'Critical', 'Finished'];

  ngOnInit() {
    this.projectForm = new FormGroup({
      'name': new FormControl(null, [Validators.required], this.forbiddenProjectName),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl(null)
    });

  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

/*  forbiddenProjectName(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Test') {
      return {'forbiddenName': true};
    }
    return null;
  }*/

  forbiddenProjectName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({'forbiddenName': true});
        } else {
          resolve(null);
        }
      }, 1200);
    });
    return promise;
  }


}
