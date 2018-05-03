import { Component, OnInit, Input } from '@angular/core';
import { TaxDetails } from '../core/models/tax-details.model';

@Component({
  selector: 'app-tax-details',
  templateUrl: './tax-details.component.html',
  styleUrls: ['./tax-details.component.css']
})
export class TaxDetailsComponent implements OnInit {

  @Input() taxDetails: TaxDetails;

  constructor() {
  }

  ngOnInit() {
  }

}
