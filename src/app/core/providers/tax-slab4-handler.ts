import { TaxHandlerBase } from './tax-handler-base';
import { TaxSlab } from '../models/tax-slab.model';

export class TaxSlab4Handler extends TaxHandlerBase {
  protected taxSlab: TaxSlab = new TaxSlab(180000, 87000,  0.37, 19822);
  Handle(taxableSalary: number): number {
    // slab-4
    if (taxableSalary <= this.taxSlab.UpperLimit) {
      return ((taxableSalary - this.taxSlab.LowerLimit) * this.taxSlab.TaxPercent) + this.taxSlab.DefaultTax;
    } else {
      return this.next.Handle(taxableSalary);
    }
  }
}
