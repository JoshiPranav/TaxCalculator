import { Component, OnInit, Input } from '@angular/core';
import { TaxDetails } from '../core/models/tax-details.model';

@Component({
  selector: 'app-tax-details',
  templateUrl: './tax-details.component.html',
  styleUrls: ['./tax-details.component.css']
})
export class TaxDetailsComponent implements OnInit {

  @Input() taxDetails: TaxDetails = new TaxDetails();

  getNetWithSuperAmount() {
    return '$' + (this.taxDetails.NetAmount + this.taxDetails.Superannuation).toFixed(2);
  }

  getGrossIncomeLabelText() {
    if (this.taxDetails.GrossIncludesSuper && this.taxDetails.Superannuation > 0) {
      return 'Gross Income (+ super)';
    } else {
      return 'Gross Income';
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
