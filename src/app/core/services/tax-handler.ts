// Chain of responsibility implementation.
// Series of handlers are responsible for calling their successors..if need be.
export abstract class TaxHandler {
  protected successor: TaxHandler;
  constructor() {
  }
  setSuccessor(successor: TaxHandler) {
    this.successor = successor;
  }
  abstract Handle(grossSalary: number): number;
}

export class TaxSlab1Handler extends TaxHandler {
  Handle(taxableSalary: number): number {
    // slab-1
    if (taxableSalary <= 18200) {
      return 0;
    } else {
      return this.successor.Handle(taxableSalary);
    }
  }
}

export class TaxSlab2Handler extends TaxHandler {
  Handle(taxableSalary: number): number {
    // slab-2
    if (taxableSalary <= 37000) {
      return ((taxableSalary - 18200) * 0.19);
    } else {
      return this.successor.Handle(taxableSalary);
    }
  }
}

  export class TaxSlab3Handler extends TaxHandler {
    Handle(taxableSalary: number): number {
      // slab-3
      if (taxableSalary <= 87000) {
        return ((taxableSalary - 37000) * 0.325) + 3572;
      } else {
        return this.successor.Handle(taxableSalary);
      }
    }
}

export class TaxSlab4Handler extends TaxHandler {
  Handle(taxableSalary: number): number {
    // slab-4
    if (taxableSalary <= 180000) {
      return ((taxableSalary - 87000) * 0.37) + 19822;
    } else {
      return this.successor.Handle(taxableSalary);
    }
  }
}

export class TaxSlab5Handler extends TaxHandler {
  Handle(taxableSalary: number): number {
    // slab-5
    return ((taxableSalary - 180000) * 0.45) + 54232;
  }
}

