export abstract class TaxHandlerBase {
  protected next: TaxHandlerBase;
  constructor() {
  }
  setSuccessor(successor: TaxHandlerBase) {
    this.next = successor;
  }
  abstract Handle(grossSalary: number): number;
}
