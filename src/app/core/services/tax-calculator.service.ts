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

    taxDetails.GrossAmount = incomeDetails.includesSuper === true
                                      ? incomeDetails.grossSalary - +taxDetails.Superannuation
                                      : incomeDetails.grossSalary + +taxDetails.Superannuation;

    taxDetails.Tax = this.incomeTaxCalculatorService.calculateTax(incomeDetails.grossSalary,
                                        +taxDetails.Superannuation,
                                        incomeDetails.includesSuper);

    taxDetails.NetAmount = incomeDetails.includesSuper === true
                                      ? incomeDetails.grossSalary - +taxDetails.Superannuation - +taxDetails.Tax
                                      : incomeDetails.grossSalary - +taxDetails.Tax;

    taxDetails.NetWithSuper = +taxDetails.NetAmount + +taxDetails.Superannuation;

    return Observable.of(taxDetails);
    }
}
