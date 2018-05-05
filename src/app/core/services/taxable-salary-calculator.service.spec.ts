import { TestBed, inject } from '@angular/core/testing';

import { TaxableSalaryCalculatorService } from './taxable-salary-calculator.service';

describe('TaxableSalaryCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaxableSalaryCalculatorService]
    });
  });

  it('should be created', inject([TaxableSalaryCalculatorService], (service: TaxableSalaryCalculatorService) => {
    expect(service).toBeTruthy();
  }));

  it('taxable salary should be equal to gross salary when it does not include super',
      inject([TaxableSalaryCalculatorService], (service: TaxableSalaryCalculatorService) => {
    const taxableSal = service.calculateTaxableSalary(10000, 10, false);
  }));

  it('taxable salary should be equal to 10% gross salary when it includes super',
      inject([TaxableSalaryCalculatorService], (service: TaxableSalaryCalculatorService) => {
    const taxableSal = service.calculateTaxableSalary(10000, 10, true);
  }));
});
