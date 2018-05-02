import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IncomeDetails } from '../core/models/income-details.model';
import { PatternValidator } from '../core/validators/pattern.validator';
import { NumericRangeValidator } from '../core/validators/numeric-range.validator';
import * as _ from 'lodash';

@Component({
  selector: 'app-incomedetails-form',
  templateUrl: './income-details-form.component.html',
  styleUrls: ['./income-details-form.component.css']
})
export class IncomedetailsformComponent implements OnInit, OnChanges {

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
                        NumericRangeValidator(0, null)]],
      includesSuper : '',
      superannuation : ['', [NumericRangeValidator(9.49, 100)]]
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

  calculate() {
    const formValues = this.idForm.value;
    this.incomeDetails = new IncomeDetails(formValues.grossSalary,
                                          formValues.includesSuper,
                                          formValues.superannuation);
    this.calculator.emit(this.incomeDetails);
    }
}

