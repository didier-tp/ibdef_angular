import { AbstractControl } from '@angular/forms';
export function ValidatePositif(control: AbstractControl) {
if (! control.value) {
     return { invalidValue: true }; //return { errorKeyname : true } if invalid
}
if (Number(control.value)<0) {
    return { invalidValue: true }; //return { errorKeyname : true } if invalid
}
return null; //return null if ok (no error)
}