export class TaxDetails {
  Superannuation: number;
  GrossAmount: number;
  Tax: number;
  NetAmount: number;
  NetWithSuper: number;
  constructor() {
    this.Superannuation = 0;
    this.GrossAmount = 0;
    this.Tax = 0;
    this.NetAmount = 0;
    this.NetWithSuper = 0;
  }
}
