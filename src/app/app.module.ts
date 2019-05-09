import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ShowErrorsComponent } from './show-errors.component';

import { BirthYearValidatorDirective } from  './validators/birth-year-validator.directive';
import { TelephoneNumberFormatValidatorDirective } from './validators/telephone-number-format-validator.directive';
import { CountryCityValidatorDirective } from './validators/country-city-validator.directive';
import { TelephoneNumbersValidatorDirective } from './validators/telephone-numbers-validator.directive';
import { UniqueNameValidatorDirective } from './validators/name-unique-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShowErrorsComponent,
    BirthYearValidatorDirective,
    TelephoneNumberFormatValidatorDirective,
    CountryCityValidatorDirective,
    TelephoneNumbersValidatorDirective,
    UniqueNameValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
