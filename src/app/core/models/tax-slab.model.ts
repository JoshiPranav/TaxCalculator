export class TaxSlab {
  UpperLimit: number;
  LowerLimit: number;
  TaxPercent: number;
  DefaultTax: number;
  constructor(upperLimit: number, lowerLimit: number, taxPercent: number, defaultTax: number) {
    this.UpperLimit = upperLimit;
    this.LowerLimit = lowerLimit;
    this.TaxPercent = taxPercent;
    this.DefaultTax = defaultTax;
  }
}
