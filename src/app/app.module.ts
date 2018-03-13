import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { HeaderComponent } from './header/header.component';
import { BankComponent } from './bank/bank.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { BlocchiComponent } from './blocchi/blocchi.component';
import { CcireportComponent } from './ccireport/ccireport.component';
import { CcireportEmpresaComponent } from './ccireport-empresa/ccireport-empresa.component';

import { BankAccountService } from './services/bank-account-service.service';
import { CustomerService } from './services/customer.service.service';
import { BlocchiService } from './services/blocci.service';
import { CCIReportService } from './services/ccireport';
import { CCIReportEmpresaService } from './services/ccireport-empresa-service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BankAccountComponent,
    HeaderComponent,
    BankComponent,
    CustomerComponent,
    BlocchiComponent,
    CcireportComponent,
    CcireportEmpresaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [BankAccountService, CustomerService, BlocchiService, CCIReportService, CCIReportEmpresaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
