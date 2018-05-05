import { TaxHandlerBase } from './tax-handler-base';
import { TaxSlab } from '../models/tax-slab.model';

export class TaxSlab5Handler extends TaxHandlerBase {
  protected taxSlab: TaxSlab = new TaxSlab(null, 180000,  0.45, 54232);
  Handle(taxableSalary: number): number {
    // slab-5
    return ((taxableSalary - this.taxSlab.LowerLimit) * this.taxSlab.TaxPercent) + this.taxSlab.DefaultTax;
  }
}
