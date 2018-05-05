import { TaxHandlerBase } from './tax-handler-base';
import { TaxSlab } from '../models/tax-slab.model';

export class TaxSlab1Handler extends TaxHandlerBase {
  protected taxSlab: TaxSlab = new TaxSlab(18200, 0, 0, 0);
  Handle(taxableSalary: number): number {
    // slab-1
    if (taxableSalary <= this.taxSlab.UpperLimit) {
      return 0;
    } else {
      return this.next.Handle(taxableSalary);
    }
  }
}
