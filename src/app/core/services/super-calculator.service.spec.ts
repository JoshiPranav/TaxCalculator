import { TestBed, inject } from '@angular/core/testing';

import { SuperCalculatorService } from './super-calculator.service';
import { IncomeDetails } from '../models/income-details.model';

describe('SuperCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuperCalculatorService]
    });
    this.superCalculatorService = new SuperCalculatorService();
  });

  it('should be created', inject([SuperCalculatorService], (service: SuperCalculatorService) => {
    expect(service).toBeTruthy();
  }));

  it('should return 0', inject([SuperCalculatorService], (service: SuperCalculatorService) => {
    const superannuation = service.calculateSuper(new IncomeDetails(100, true, 0));
    expect(superannuation).toEqual(0);
  }));

  it('should return 5000', inject([SuperCalculatorService], (service: SuperCalculatorService) => {
    const superannuation = service.calculateSuper(new IncomeDetails(50000, true, 10));
    expect(superannuation).toEqual(5000);
  }));
});
