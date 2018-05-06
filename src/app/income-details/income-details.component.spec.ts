import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomedetailsComponent } from './income-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaxCalculatorService } from '../core/services/tax-calculator.service';
import { IncomeTaxCalculatorService } from '../core/services/income-tax-calculator.service';
import { SuperCalculatorService } from '../core/services/super-calculator.service';
import { TaxHandlerBase } from '../core/providers/tax-handler-base';
import { TaxSlab1Handler } from '../core/providers/tax-slab1-handler';
import { TaxSlab2Handler } from '../core/providers/tax-slab2-handler';
import { TaxSlab3Handler } from '../core/providers/tax-slab3-handler';
import { TaxSlab4Handler } from '../core/providers/tax-slab4-handler';
import { TaxSlab5Handler } from '../core/providers/tax-slab5-handler';

describe('IncomedetailsComponent', () => {
  let component: IncomedetailsComponent;
  let fixture: ComponentFixture<IncomedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomedetailsComponent ],
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        TaxCalculatorService,
        IncomeTaxCalculatorService,
        SuperCalculatorService,
        TaxHandlerBase,
        TaxSlab1Handler,
        TaxSlab2Handler,
        TaxSlab3Handler,
        TaxSlab4Handler,
        TaxSlab5Handler,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.idForm.valid).toBeFalsy();
  });

  it('fields to be invalid on init', () => {
    const grossSal = component.idForm.controls['grossSalary'];
    expect(grossSal.valid).toBeFalsy();
  });

  it('gross salary field required check', () => {
    let errors = {};
    const grossSal = component.idForm.controls['grossSalary'];
    errors = grossSal.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('gross salary field numeric pattern invalid (non-numeric)', () => {
    let errors = {};
    const grossSal = component.idForm.controls['grossSalary'];
    grossSal.setValue('test');
    errors = grossSal.errors || {};
    expect(errors['patternInvalid']).toBeTruthy();
  });

  it('gross salary field numeric pattern invalid (numeric left space)', () => {
    let errors = {};
    const grossSal = component.idForm.controls['grossSalary'];
    grossSal.setValue('1234 ');
    errors = grossSal.errors || {};
    expect(errors['patternInvalid']).toBeTruthy();
  });

  it('gross salary field numeric range invalid (0)', () => {
    let errors = {};
    const grossSal = component.idForm.controls['grossSalary'];
    grossSal.setValue('0');
    errors = grossSal.errors || {};
    expect(errors['numericRangeInvalid']).toBeTruthy();
  });

  it('gross salary field numeric range invalid (<0)', () => {
    let errors = {};
    const grossSal = component.idForm.controls['grossSalary'];
    grossSal.setValue('-1');
    errors = grossSal.errors || {};
    expect(errors['numericRangeInvalid']).toBeTruthy();
  });

  it('gross salary field should be valid', () => {
    let errors = {};
    const grossSal = component.idForm.controls['grossSalary'];
    grossSal.setValue('1234');
    errors = grossSal.errors || {};
    expect(errors['patternInvalid']).toBeFalsy();
    expect(errors['numericRangeInvalid']).toBeFalsy();
  });

  it('superannuation field numeric pattern invalid (non-numeric)', () => {
    let errors = {};
    const superannuation = component.idForm.controls['superannuation'];
    superannuation.setValue('test');
    errors = superannuation.errors || {};
    expect(errors['patternInvalid']).toBeTruthy();
  });

  it('superannuation field numeric pattern invalid (numeric left space)', () => {
    let errors = {};
    const superannuation = component.idForm.controls['superannuation'];
    superannuation.setValue('1234 ');
    errors = superannuation.errors || {};
    expect(errors['patternInvalid']).toBeTruthy();
  });

  it('superannuation field numeric range invalid (0)', () => {
    let errors = {};
    const superannuation = component.idForm.controls['superannuation'];
    superannuation.setValue('0');
    errors = superannuation.errors || {};
    expect(errors['numericRangeInvalid']).toBeTruthy();
  });

  it('superannuation field numeric range invalid (<9.5)', () => {
    let errors = {};
    const superannuation = component.idForm.controls['superannuation'];
    superannuation.setValue('9.49');
    errors = superannuation.errors || {};
    expect(errors['numericRangeInvalid']).toBeTruthy();
  });

  it('superannuation field numeric range invalid (>100)', () => {
    let errors = {};
    const superannuation = component.idForm.controls['superannuation'];
    superannuation.setValue('100');
    errors = superannuation.errors || {};
    expect(errors['patternInvalid']).toBeTruthy();
  });

  it('superannuation numeric range invalid (<0)', () => {
    let errors = {};
    const superannuation = component.idForm.controls['superannuation'];
    superannuation.setValue('-1');
    errors = superannuation.errors || {};
    expect(errors['numericRangeInvalid']).toBeTruthy();
  });

  it('superannuation field should be valid', () => {
    let errors = {};
    const superannuation = component.idForm.controls['superannuation'];
    superannuation.setValue('12.34');
    errors = superannuation.errors || {};
    expect(errors['patternInvalid']).toBeFalsy();
    expect(errors['numericRangeInvalid']).toBeFalsy();
  });
});
