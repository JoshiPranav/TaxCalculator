import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule, NG_VALIDATORS } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaxCalculatorService } from './core/services/tax-calculator.service';
import { IncomedetailsComponent } from './income-details/income-details.component';
import { TaxCalculatorComponent } from './tax-calculator/tax-calculator.component';
import { TaxDetailsComponent } from './tax-details/tax-details.component';
import { SuperCalculatorService } from './core/services/super-calculator.service';
import { IncomeTaxCalculatorService } from './core/services/income-tax-calculator.service';
import { TaxableSalaryCalculatorService } from './core/services/taxable-salary-calculator.service';

@NgModule({
  declarations: [
    AppComponent,
    IncomedetailsComponent,
    TaxCalculatorComponent,
    TaxDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TaxCalculatorService,
    SuperCalculatorService,
    TaxableSalaryCalculatorService,
    IncomeTaxCalculatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
