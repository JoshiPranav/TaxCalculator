import { TaxHandlerBase } from './tax-handler-base';
import { TaxSlab } from '../models/tax-slab.model';

export class TaxSlab2Handler extends TaxHandlerBase {
  protected taxSlab: TaxSlab = new TaxSlab(37000, 18200,  0.19, 0);
  Handle(taxableSalary: number): number {
    // slab-2
    if (taxableSalary <= this.taxSlab.UpperLimit) {
      return ((taxableSalary - this.taxSlab.LowerLimit) * this.taxSlab.TaxPercent) + this.taxSlab.DefaultTax;
    } else {
      return this.next.Handle(taxableSalary);
    }
  }
}
