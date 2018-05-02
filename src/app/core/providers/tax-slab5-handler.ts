import { TaxHandlerBase } from './tax-handler-base';

export class TaxSlab5Handler extends TaxHandlerBase {
  Handle(taxableSalary: number): number {
    // slab-5
    return ((taxableSalary - 180000) * 0.45) + 54232;
  }
}
