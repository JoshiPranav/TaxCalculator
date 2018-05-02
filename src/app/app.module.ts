import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule, NG_VALIDATORS } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaxCalculatorService } from './core/services/tax-calculator.service';
import { IncomedetailsformComponent } from './income-details-form/income-details-form.component';
import { TaxCalculatorComponent } from './tax-calculator/tax-calculator.component';
import { TaxDetailsComponent } from './tax-details/tax-details.component';
import { SuperCalculatorService } from './core/services/super-calculator.service';
import { IncomeTaxCalculatorService } from './core/services/income-tax-calculator.service';


@NgModule({
  declarations: [
    AppComponent,
    IncomedetailsformComponent,
    TaxCalculatorComponent,
    TaxDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TaxCalculatorService, SuperCalculatorService, IncomeTaxCalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
