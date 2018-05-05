import { Injectable } from '@angular/core';
import { IncomeDetails } from '../models/income-details.model';
import { TaxDetails } from '../models/tax-details.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { SuperCalculatorService } from './super-calculator.service';
import { IncomeTaxCalculatorService } from './income-tax-calculator.service';

@Injectable()
export class TaxCalculatorService {

  constructor(private superCalculatorService: SuperCalculatorService,
    private incomeTaxCalculatorService: IncomeTaxCalculatorService) { }

  calculateTax(incomeDetails: IncomeDetails): Observable<TaxDetails> {
    const taxDetails = new TaxDetails();

    taxDetails.Superannuation = this.superCalculatorService.calculateSuper(incomeDetails);

    taxDetails.Tax = this.incomeTaxCalculatorService.calculateTax(incomeDetails.grossSalary,
      taxDetails.Superannuation,
      incomeDetails.includesSuper);

    if (incomeDetails.includesSuper === true) {
      taxDetails.GrossAmount = incomeDetails.grossSalary - taxDetails.Superannuation;
      taxDetails.NetAmount = incomeDetails.grossSalary - taxDetails.Superannuation - taxDetails.Tax;
      taxDetails.GrossIncludesSuper = false;
    } else {
      taxDetails.GrossAmount = incomeDetails.grossSalary + taxDetails.Superannuation;
      taxDetails.GrossIncludesSuper = true;
      taxDetails.NetAmount = incomeDetails.grossSalary - taxDetails.Tax;
    }

    return Observable.of(taxDetails);
  }
}
