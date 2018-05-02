import { Injectable } from '@angular/core';

@Injectable()
export class IncomeTaxCalculatorService {

  constructor() { }

  calculateTax(grossSalary: number, superAmount: number, grossIncludesSuper: boolean): number {
    let taxableSalary: number;
    let totalTax = 0;

    if (grossIncludesSuper === true) {
      taxableSalary = grossSalary - superAmount;
    } else {
      taxableSalary = grossSalary;
    }

    // slab-1
    if (taxableSalary <= 18200) {
      return totalTax;
    }

    // slab-2
    if (taxableSalary <= 37000) {
      totalTax = ((taxableSalary - 18200) * 0.19);
      return totalTax;
    }

    // slab-3
    if (taxableSalary <= 87000) {
      totalTax = ((taxableSalary - 37000) * 0.325) + 3572;
      return totalTax;
    }

    // slab-4
    if (taxableSalary <= 180000) {
      totalTax = ((taxableSalary - 87000) * 0.37) + 19822;
      return totalTax;
    }

    // slab-5
    totalTax = ((taxableSalary - 180000) * 0.45) + 54232;
    return totalTax;
  }
}
