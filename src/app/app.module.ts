import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule, NG_VALIDATORS } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaxCalculatorService } from './core/services/tax-calculator.service';
import { IncomedetailsformComponent } from './incomedetailsform/incomedetailsform.component';


@NgModule({
  declarations: [
    AppComponent,
    IncomedetailsformComponent
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
