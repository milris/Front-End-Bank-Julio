import { Component, OnInit } from '@angular/core';
import { ICCIReportEmpresa } from '../models/ccireportEmpresa';
import { CCIReportEmpresaService } from '../services/ccireport-empresa-service';

@Component({
  selector: 'app-ccireport-empresa',
  templateUrl: './ccireport-empresa.component.html',
  styleUrls: ['./ccireport-empresa.component.css']
})
export class CcireportEmpresaComponent implements OnInit {

  _CCIReportEmpresa: ICCIReportEmpresa[];
  
  public userId;
  public office;
  public bill;

  constructor(private CCIReportEmpresaService: CCIReportEmpresaService) { }

  getPosts(): void {
    this.CCIReportEmpresaService.getCCIReportEmpresa(this.userId, this.office, this.bill)
        .subscribe(
            resultArray => this._CCIReportEmpresa = resultArray,
            error => console.log("Error :: " + error)
        )
  }

  ngOnInit(): void {
    //this.getPosts();
  }

  sendRequest(){
    this.getPosts();
  }

}
