import { TaxHandlerBase } from './tax-handler-base';

export class TaxSlab3Handler extends TaxHandlerBase {
  Handle(taxableSalary: number): number {
    // slab-3
    if (taxableSalary <= 87000) {
      return ((taxableSalary - 37000) * 0.325) + 3572;
    } else {
      return this.successor.Handle(taxableSalary);
    }
  }
}

