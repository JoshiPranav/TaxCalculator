import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxCalculatorComponent } from './tax-calculator.component';
import { IncomedetailsComponent } from '../income-details/income-details.component';
import { TaxDetailsComponent } from '../tax-details/tax-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaxCalculatorService } from '../core/services/tax-calculator.service';
import { IncomeTaxCalculatorService } from '../core/services/income-tax-calculator.service';
import { SuperCalculatorService } from '../core/services/super-calculator.service';
import { TaxHandlerBase } from '../core/providers/tax-handler-base';
import { TaxSlab1Handler } from '../core/providers/tax-slab1-handler';
import { TaxSlab2Handler } from '../core/providers/tax-slab2-handler';
import { TaxSlab3Handler } from '../core/providers/tax-slab3-handler';
import { TaxSlab4Handler } from '../core/providers/tax-slab4-handler';
import { TaxSlab5Handler } from '../core/providers/tax-slab5-handler';

describe('TaxCalculatorComponent', () => {
  let component: TaxCalculatorComponent;
  let fixture: ComponentFixture<TaxCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxCalculatorComponent,
        IncomedetailsComponent,
        TaxDetailsComponent
      ],
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        TaxCalculatorService,
        IncomeTaxCalculatorService,
        SuperCalculatorService,
        TaxHandlerBase,
        TaxSlab1Handler,
        TaxSlab2Handler,
        TaxSlab3Handler,
        TaxSlab4Handler,
        TaxSlab5Handler,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
