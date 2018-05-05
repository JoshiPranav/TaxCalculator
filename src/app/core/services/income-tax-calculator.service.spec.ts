import { TestBed, inject } from '@angular/core/testing';

import { IncomeTaxCalculatorService } from './income-tax-calculator.service';

describe('IncomeTaxCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IncomeTaxCalculatorService]
    });
  });

  it('should be created', inject([IncomeTaxCalculatorService], (service: IncomeTaxCalculatorService) => {
    const incomeTax = service.calculateTax(50000, 5000, false);
    expect(service).toBeTruthy();
  }));
});
