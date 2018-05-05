export class TaxDetails {
  Superannuation: number;
  GrossAmount: number;
  Tax: number;
  NetAmount: number;
  GrossIncludesSuper: boolean;
  constructor() {
    this.Superannuation = 0;
    this.GrossAmount = 0;
    this.Tax = 0;
    this.NetAmount = 0;
    this.GrossIncludesSuper = false;
  }
}
