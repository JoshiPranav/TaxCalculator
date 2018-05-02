import { TestBed, inject } from '@angular/core/testing';

import { SuperCalculatorService } from './super-calculator.service';

describe('SuperCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuperCalculatorService]
    });
  });

  it('should be created', inject([SuperCalculatorService], (service: SuperCalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
