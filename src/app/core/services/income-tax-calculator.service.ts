import { Injectable } from '@angular/core';
import { TaxSlab1Handler, TaxSlab2Handler, TaxSlab3Handler, TaxSlab4Handler, TaxSlab5Handler } from './tax-handler';

@Injectable()
export class IncomeTaxCalculatorService {

  constructor() { }

  calculateTax(grossSalary: number, superAmount: number, grossIncludesSuper: boolean): number {
    let taxableSalary: number;

    if (grossIncludesSuper === true) {
      taxableSalary = grossSalary - superAmount;
    } else {
      taxableSalary = grossSalary;
    }

    const taxSlab1Handler = new TaxSlab1Handler();
    const taxSlab2Handler = new TaxSlab2Handler();
    const taxSlab3Handler = new TaxSlab3Handler();
    const taxSlab4Handler = new TaxSlab4Handler();
    const taxSlab5Handler = new TaxSlab5Handler();

    // Chain of responsibility - Series of handlers are responsible for calling their successors..if need be.
    taxSlab1Handler.setSuccessor(taxSlab2Handler);
    taxSlab2Handler.setSuccessor(taxSlab3Handler);
    taxSlab3Handler.setSuccessor(taxSlab4Handler);
    taxSlab4Handler.setSuccessor(taxSlab5Handler);

    return taxSlab1Handler.Handle(taxableSalary);
  }
}
