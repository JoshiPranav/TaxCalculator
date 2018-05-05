import { TestBed, inject } from '@angular/core/testing';

import { TaxCalculatorService } from './tax-calculator.service';
import { SuperCalculatorService } from './super-calculator.service';
import { IncomeTaxCalculatorService } from './income-tax-calculator.service';
import { TaxableSalaryCalculatorService } from './taxable-salary-calculator.service';
import { IncomeDetails } from '../models/income-details.model';

describe('TaxCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaxCalculatorService, SuperCalculatorService, TaxableSalaryCalculatorService, IncomeTaxCalculatorService]
    });
  });

  it('should be created', inject([TaxCalculatorService], (service: TaxCalculatorService) => {
    expect(service).toBeTruthy();
  }));

  it('Gross salary should be excluding super when income includes super',
  inject([TaxCalculatorService], (service: TaxCalculatorService) => {
    const taxDetails = service.calculateTax(new IncomeDetails(50000, true, 10));
    taxDetails.subscribe((data => {
      expect(data.Superannuation).toEqual(5000);
      expect(data.GrossAmount).toEqual(45000);
      expect(data.GrossIncludesSuper).toEqual(false);
      expect(data.Tax).toEqual(6172);
      expect(data.NetAmount).toEqual(38828);
    }));
  }));

  it('Gross salary should be including super when income includes super',
  inject([TaxCalculatorService], (service: TaxCalculatorService) => {
    const taxDetails = service.calculateTax(new IncomeDetails(50000, false, 10));
    taxDetails.subscribe((data => {
      expect(data.Superannuation).toEqual(5000);
      expect(data.GrossAmount).toEqual(55000);
      expect(data.GrossIncludesSuper).toEqual(true);
      expect(data.Tax).toEqual(7797);
      expect(data.NetAmount).toEqual(42203);
    }));
  }));
});
