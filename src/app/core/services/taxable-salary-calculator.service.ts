import { Injectable } from '@angular/core';

@Injectable()
export class TaxableSalaryCalculatorService {

  constructor() { }

  calculateTaxableSalary(grossSalary: number, superAmount: number, grossIncludesSuper: boolean) {
    if (grossIncludesSuper === true) {
      return grossSalary - superAmount;
    } else {
      return grossSalary;
    }
  }
}
