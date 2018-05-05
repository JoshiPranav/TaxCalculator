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

  it('should return 0 when taxable salary is less than 18200',
  inject([IncomeTaxCalculatorService], (service: IncomeTaxCalculatorService) => {
    const tax = service.calculateTax(18199);
    expect(tax).toEqual(0);
  }));

  it('should return 0 when taxable salary is 18200',
  inject([IncomeTaxCalculatorService], (service: IncomeTaxCalculatorService) => {
    const tax = service.calculateTax(18199);
    expect(tax).toEqual(0);
  }));

  it('should return 19% when taxable salary is 37000',
  inject([IncomeTaxCalculatorService], (service: IncomeTaxCalculatorService) => {
    const tax = service.calculateTax(37000);
    expect(tax).toEqual(3572);
  }));

  it('should return 19% when taxable salary is less than 37000',
  inject([IncomeTaxCalculatorService], (service: IncomeTaxCalculatorService) => {
    const tax = service.calculateTax(36999);
    expect(tax).toEqual(3571.81);
  }));

  it('should return 32.5% when taxable salary is 87000',
  inject([IncomeTaxCalculatorService], (service: IncomeTaxCalculatorService) => {
    const tax = service.calculateTax(87000);
    expect(tax).toEqual(19822);
  }));

  it('should return 32.5% when taxable salary is less than 86999',
  inject([IncomeTaxCalculatorService], (service: IncomeTaxCalculatorService) => {
    const tax = service.calculateTax(86999);
    expect(tax).toEqual(19821.68);
  }));

  it('should return 37% when taxable salary is 180000',
  inject([IncomeTaxCalculatorService], (service: IncomeTaxCalculatorService) => {
    const tax = service.calculateTax(180000);
    expect(tax).toEqual(54232);
  }));

  it('should return 37% when taxable salary is less than 179999',
  inject([IncomeTaxCalculatorService], (service: IncomeTaxCalculatorService) => {
    const tax = service.calculateTax(179999);
    expect(tax).toEqual(54231.63);
  }));

  it('should return 45% when taxable salary is more than 180000',
  inject([IncomeTaxCalculatorService], (service: IncomeTaxCalculatorService) => {
    const tax = service.calculateTax(200000);
    expect(tax).toEqual(63232);
  }));
});
