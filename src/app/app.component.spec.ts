import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TaxCalculatorComponent } from './tax-calculator/tax-calculator.component';
import { IncomedetailsComponent } from './income-details/income-details.component';
import { TaxDetailsComponent } from './tax-details/tax-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaxCalculatorService } from './core/services/tax-calculator.service';
import { IncomeTaxCalculatorService } from './core/services/income-tax-calculator.service';
import { SuperCalculatorService } from './core/services/super-calculator.service';
import { TaxHandlerBase } from './core/providers/tax-handler-base';
import { TaxSlab1Handler } from './core/providers/tax-slab1-handler';
import { TaxSlab2Handler } from './core/providers/tax-slab2-handler';
import { TaxSlab3Handler } from './core/providers/tax-slab3-handler';
import { TaxSlab4Handler } from './core/providers/tax-slab4-handler';
import { TaxSlab5Handler } from './core/providers/tax-slab5-handler';
import { TaxableSalaryCalculatorService } from './core/services/taxable-salary-calculator.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TaxCalculatorComponent,
        IncomedetailsComponent,
        TaxDetailsComponent
      ],
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        TaxCalculatorService,
        TaxableSalaryCalculatorService,
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
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('TaxCalculator');
  // }));
});
