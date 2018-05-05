import { Injectable } from '@angular/core';
import { IncomeDetails } from '../models/income-details.model';

@Injectable()
export class SuperCalculatorService {

  constructor() { }

  calculateSuper(incomeDetails: IncomeDetails): number {
    if (incomeDetails.superannuation === 0) {
      return 0;
    }
    return (incomeDetails.grossSalary * incomeDetails.superannuation / 100);
  }
}
