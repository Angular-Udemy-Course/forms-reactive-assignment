import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  projectStatuses = ['Stable', 'Critical', 'Finished'];
  forbiddenProjectName = 'Test';

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(
        null,
        [
          Validators.required,
          // this.forbiddenProject.bind(this)
        ],
        this.forbiddenProjectAsync.bind(this)
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
    console.log(this.projectForm);
  }

  forbiddenProject(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenProjectName === control.value) {
      return {'projectNameIsForbidden': true};
    }
    return null;
  }

  forbiddenProjectAsync(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (this.forbiddenProjectName === control.value) {
          resolve({'projectNameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
  }
}
