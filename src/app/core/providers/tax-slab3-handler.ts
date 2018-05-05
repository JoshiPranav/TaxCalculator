import { TaxHandlerBase } from './tax-handler-base';
import { TaxSlab } from '../models/tax-slab.model';

export class TaxSlab3Handler extends TaxHandlerBase {
  protected taxSlab: TaxSlab = new TaxSlab(87000, 37000,  0.325, 3572);
  Handle(taxableSalary: number): number {
    // slab-3
    if (taxableSalary <= this.taxSlab.UpperLimit) {
      return ((taxableSalary - this.taxSlab.LowerLimit) * this.taxSlab.TaxPercent) + this.taxSlab.DefaultTax;
    } else {
      return this.next.Handle(taxableSalary);
    }
  }
}

