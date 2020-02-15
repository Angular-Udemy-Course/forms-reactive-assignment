import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators {
  reservedProjectName = 'Test';

  // invalidProjectName(control: FormControl): {[s: string]: boolean} {
  //   if (control.value === this.reservedProjectName) {
  //     return { 'invalidProjectName': true };
  //   }
  //   return null;
  // }

  invalidProjectName(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value == this.reservedProjectName) {
          resolve({'invalidProjectName': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
  }
}