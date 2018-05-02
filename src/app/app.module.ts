import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule, NG_VALIDATORS } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaxCalculatorService } from './core/services/tax-calculator.service';
import { IncomedetailsformComponent } from './income-details-form/income-details-form.component';
import { TaxCalculatorComponent } from './tax-calculator/tax-calculator.component';
import { TaxDetailsComponent } from './tax-details/tax-details.component';


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
  providers: [TaxCalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
