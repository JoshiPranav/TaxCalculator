import { Injectable } from '@angular/core';
import { IncomeDetails } from '../models/income-details.model';

@Injectable()
export class SuperCalculatorService {

  constructor() { }

  calculateSuper(incomeDetails: IncomeDetails): number {
    // if no super amount given then its 0. Not assuming to be 9.5 as not suggested in the assignment.
    if (incomeDetails.superannuation === 0) {
      return 0;
    }
    // else calculate amount from percent
    return (incomeDetails.grossSalary * incomeDetails.superannuation / 100);
  }
}
