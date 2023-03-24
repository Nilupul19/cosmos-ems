import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { CurrencyformatterPipe } from './pipes/currencyformatter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    CurrencyformatterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
