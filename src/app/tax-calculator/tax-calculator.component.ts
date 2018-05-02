import { Component, OnInit } from '@angular/core';
import { IncomeDetails } from '../core/models/income-details.model';
import { TaxDetails } from '../core/models/tax-details.model';
import { TaxCalculatorService } from '../core/services/tax-calculator.service';

@Component({
  selector: 'app-tax-calculator',
  templateUrl: './tax-calculator.component.html',
  styleUrls: ['./tax-calculator.component.css'],
})
export class TaxCalculatorComponent implements OnInit {

  incomeDetails: IncomeDetails;
  taxDetails: TaxDetails = new TaxDetails();

  constructor(private taxCalulatorService: TaxCalculatorService) { }

  ngOnInit() {
  }

  calculate(event) {
    this.incomeDetails = event;
    this.taxCalulatorService.calculateTax(this.incomeDetails).subscribe(taxDetailsData => {
      this.taxDetails = taxDetailsData;
      console.log('Gross amount: ' + this.taxDetails.GrossAmount);
    });
  }
}
