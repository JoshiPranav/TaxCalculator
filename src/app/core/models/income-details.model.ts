export class IncomeDetails {
  grossSalary: number;
  includesSuper: boolean;
  superannuation: number;

  constructor(grossSalary: number, includesSuper: boolean, superannuation: number) {
    this.grossSalary = grossSalary;
    this.includesSuper = includesSuper;
    this.superannuation = superannuation;
  }
}
