import { TestBed, inject } from '@angular/core/testing';

import { TaxCalculatorService } from './tax-calculator.service';
import { SuperCalculatorService } from './super-calculator.service';
import { IncomeTaxCalculatorService } from './income-tax-calculator.service';

describe('TaxCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaxCalculatorService, SuperCalculatorService, IncomeTaxCalculatorService]
    });
  });

  it('should be created', inject([TaxCalculatorService], (service: TaxCalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
