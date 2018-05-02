import { TestBed, inject } from '@angular/core/testing';

import { IncomeTaxCalculatorService } from './income-tax-calculator.service';

describe('IncomeTaxCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IncomeTaxCalculatorService]
    });
  });

  it('should be created', inject([IncomeTaxCalculatorService], (service: IncomeTaxCalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
