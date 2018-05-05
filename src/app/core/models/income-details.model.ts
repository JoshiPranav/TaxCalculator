export class IncomeDetails {
  grossSalary: number;
  includesSuper: boolean;
  superannuation: number;

  constructor(grossSalary, includesSuper, superannuation) {
    this.grossSalary = grossSalary;
    this.includesSuper = includesSuper === true;
    this.superannuation = superannuation;
  }
}
