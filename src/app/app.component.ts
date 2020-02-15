import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  projectStatuses = ['Stable', 'Critical', 'Finished'];
  forbiddenProjectName = 'Test';
  customValidators: CustomValidators;

  ngOnInit() {
    this.customValidators = new CustomValidators();
    this.projectForm = new FormGroup({
      'projectName': new FormControl(
        null,
        [
          Validators.required,
          // this.customValidators.invalidProjectName.bind(this.customValidators)
        ],
        this.customValidators.invalidProjectName.bind(this.customValidators)
      ),
      'email': new FormControl(
        null,
        [Validators.required, Validators.email]
      ),
      'projectStatus': new FormControl(
        this.projectStatuses[1]
      )
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }
}
