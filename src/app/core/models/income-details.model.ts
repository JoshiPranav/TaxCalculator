export class IncomeDetails {
  grossSalary: number;
  includesSuper: boolean;
  superannuation: number;

  constructor(grossSalary, includesSuper, superannuation) {
    this.grossSalary = grossSalary != null ? +grossSalary.replace('$', '') : 0;
    this.includesSuper = includesSuper === true;
    this.superannuation = superannuation != null ? +superannuation.replace('%', '') : 0;
  }
}
