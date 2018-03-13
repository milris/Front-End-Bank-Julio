import { Routes, RouterModule } from "@angular/router";
import { BankComponent } from "./bank/bank.component";
import { BankAccountComponent } from "./bank-account/bank-account.component";
import { CustomerComponent } from "./customer/customer.component";
import { BlocchiComponent } from "./blocchi/blocchi.component";
import { CcireportComponent } from "./ccireport/ccireport.component";
import { CcireportEmpresaComponent } from "./ccireport-empresa/ccireport-empresa.component";
import { NgModule } from "@angular/core";

const appRoutes: Routes = [
    { path: '', component: BankComponent },
    { path: 'bankAccount', component: BankAccountComponent },
    { path: 'customer', component: CustomerComponent },
    { path: 'blocchi', component: BlocchiComponent },
    { path: 'CCIReport', component: CcireportComponent },
    { path: 'CCIReportEmpresa', component: CcireportEmpresaComponent },
  ];

  @NgModule({
      imports: [RouterModule.forRoot(appRoutes)],
      exports: [RouterModule]
  })

  export class AppRoutingModule {

  }