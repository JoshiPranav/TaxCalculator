import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IncomeDetails } from '../core/models/income-details.model';
import { TaxDetails } from '../core/models/tax-details.model';
import { TaxCalculatorService } from '../core/services/tax-calculator.service';
import { PatternValidator } from '../core/validators/pattern.validator';
import { NumericRangeValidator } from '../core/validators/numeric-range.validator';
import * as _ from 'lodash';

@Component({
  selector: 'app-incomedetailsform',
  templateUrl: './incomedetailsform.component.html',
  styleUrls: ['./incomedetailsform.component.css']
})
export class IncomedetailsformComponent implements OnInit, OnChanges {

  idForm: FormGroup;
  grossSalary: number;
  includesSuper: boolean;
  superannuation: number;

  incomeDetails: IncomeDetails = new IncomeDetails();
  taxDetails: TaxDetails;

  constructor(private fb: FormBuilder,
              private taxCalulatorService: TaxCalculatorService) {
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
    console.log(this.idForm.value);
  }
}
