export abstract class TaxHandlerBase {
  protected successor: TaxHandlerBase;
  constructor() {
  }
  setSuccessor(successor: TaxHandlerBase) {
    this.successor = successor;
  }
  abstract Handle(grossSalary: number): number;
}
