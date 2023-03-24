import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { CurrencyformatterPipe } from './pipes/currencyformatter.pipe';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    CurrencyformatterPipe,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
