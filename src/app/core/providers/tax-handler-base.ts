import { TaxSlab } from '../models/tax-slab.model';

export abstract class TaxHandlerBase {
  protected next: TaxHandlerBase;
  protected abstract taxSlab: TaxSlab;
  constructor() {
  }
  setSuccessor(successor: TaxHandlerBase) {
    this.next = successor;
  }
  abstract Handle(grossSalary: number): number;
}
