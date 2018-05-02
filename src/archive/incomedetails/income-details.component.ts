import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { IncomeDetails } from '../../app/core/models/income-details.model';
import { TaxCalculatorService } from '../../app/core/services/tax-calculator.service';
import { TaxDetails } from '../../app/core/models/tax-details.model';

@Component({
  selector: 'app-income-details',
  templateUrl: './income-details.component.html',
  styleUrls: ['./income-details.component.css']
})
export class IncomeDetailsComponent implements OnInit, OnChanges {

  public incomeDetails: IncomeDetails = new IncomeDetails();
  public taxDetails: TaxDetails;

  constructor(private taxCalulatorService: TaxCalculatorService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  Calculate() {
    this.taxCalulatorService.calculateTax(this.incomeDetails).subscribe(data => {
      this.taxDetails = data;
    });
  }
}
