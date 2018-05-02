import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';

export function greaterThanValueValidator(value: number): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    if (control.value) {
      const ignoredSpCharString = control.value.trim().replace('%', '').replace('$', '');
      // tslint:disable-next-line:comment-format
      //if (!isNaN(ignoredSpCharString)) {
        const isValid = (+ignoredSpCharString > value);
        return isValid ? null : {'greaterThanValue': {value: control.value}};
      // tslint:disable-next-line:comment-format
      //}
    }
  };
}

@Directive({
  selector: '[appGreaterThanValue]',
  providers: [{provide: NG_VALIDATORS, useExisting: GreaterThanValidatorDirective, multi: true}]
})
export class GreaterThanValidatorDirective implements Validator {
  // tslint:disable-next-line:no-input-rename
  @Input('appGreaterThanValue') greaterThanValue: number;

  validate(control: AbstractControl): {[key: string]: any} {
    return this.greaterThanValue ? greaterThanValueValidator(this.greaterThanValue)(control)
                              : null;
  }
}

