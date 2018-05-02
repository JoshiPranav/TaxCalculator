import { TaxHandlerBase } from './tax-handler-base';

export class TaxSlab4Handler extends TaxHandlerBase {
  Handle(taxableSalary: number): number {
    // slab-4
    if (taxableSalary <= 180000) {
      return ((taxableSalary - 87000) * 0.37) + 19822;
    } else {
      return this.successor.Handle(taxableSalary);
    }
  }
}
