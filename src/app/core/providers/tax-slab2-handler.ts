import { TaxHandlerBase } from './tax-handler-base';

export class TaxSlab2Handler extends TaxHandlerBase {
  Handle(taxableSalary: number): number {
    // slab-2
    if (taxableSalary <= 37000) {
      return ((taxableSalary - 18200) * 0.19);
    } else {
      return this.next.Handle(taxableSalary);
    }
  }
}
