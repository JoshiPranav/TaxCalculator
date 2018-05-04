import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IncomeDetails } from '../core/models/income-details.model';
import { PatternValidator } from '../core/validators/pattern.validator';
import { NumericRangeValidator } from '../core/validators/numeric-range.validator';
import * as _ from 'lodash';

@Component({
  selector: 'app-income-details',
  templateUrl: './income-details.component.html',
  styleUrls: ['./income-details.component.css']
})
export class IncomedetailsComponent implements OnInit, OnChanges {

  idForm: FormGroup;
  grossSalary: number;
  includesSuper: boolean;
  superannuation: number;
  incomeDetails: IncomeDetails;
  @Output() calculator = new EventEmitter();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.idForm = this.fb.group({
      grossSalary : ['',
                      [Validators.required,
                        NumericRangeValidator(0, null),
                      PatternValidator(new RegExp('^\\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(.[0-9][0-9]?)?$'))]],
      includesSuper : '',
      superannuation : ['', [NumericRangeValidator(9.49, 100), PatternValidator(new RegExp('^\\d{0,2}(\\.\\d{1,2})? *%?$'))]]
    });
    this.ngOnChanges();
  }

  ngOnChanges(): void {
    this.idForm.valueChanges.subscribe(val => {
      if (this.idForm.valid) {
        this.calculate();
      }
    });
  }

  toggleInclSuper(e) {
    const superAnnuationControl = this.idForm.get('superannuation');
    if (e.target.checked) {
      superAnnuationControl.setValidators([NumericRangeValidator(9.49, 100),
        PatternValidator(new RegExp('^\\d{0,2}(\\.\\d{1,2})? *%?$')),
        Validators.required]);
        // if (this.idForm.value.superannuation.trim() === '') {
        //   alert(this.idForm.value.superannuation);
        //   superAnnuationControl.setValue(9.5);
        // }
    } else {
      superAnnuationControl.setValidators([NumericRangeValidator(9.49, 100),
        PatternValidator(new RegExp('^\\d{0,2}(\\.\\d{1,2})? *%?$'))]);
    }
    superAnnuationControl.updateValueAndValidity();
  }

  reset() {
    this.idForm.reset();
  }

  calculate() {
    const formValues = this.idForm.value;
    this.incomeDetails = new IncomeDetails(formValues.grossSalary,
                                          formValues.includesSuper,
                                          formValues.superannuation);
    this.calculator.emit(this.incomeDetails);
  }
}

