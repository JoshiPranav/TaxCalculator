import { AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';

export function NumericRangeValidator(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    if (control.value) {
      const ignoredSpCharString = control.value.replace('%', '').replace('$', '');
      if (min != null) {
        return (+ignoredSpCharString > min) ? null : {'numericRangeInvalid': {value: control.value}};
      }
      if (max != null) {
        return (+ignoredSpCharString < max) ? null : {'numericRangeInvalid': {value: control.value}};
      }
      return null;
    }
  };
}
