import { Injectable } from '@angular/core';
import { IncomeDetails } from '../models/income-details.model';
import { TaxDetails } from '../models/tax-details.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class TaxCalculatorService {

  constructor() { }

  calculateTax(incomeDetails: IncomeDetails): Observable<TaxDetails> {
    const taxDetails = new TaxDetails();
    taxDetails.GrossAmount = incomeDetails.grossSalary;
    return Observable.of(taxDetails);
  }
}
