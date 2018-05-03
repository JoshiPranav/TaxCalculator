import { TaxHandlerBase } from './tax-handler-base';

export class TaxSlab1Handler extends TaxHandlerBase {
  Handle(taxableSalary: number): number {
    // slab-1
    if (taxableSalary <= 18200) {
      return 0;
    } else {
      return this.next.Handle(taxableSalary);
    }
  }
}
