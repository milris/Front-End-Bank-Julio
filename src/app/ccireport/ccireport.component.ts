import { Component, OnInit } from '@angular/core';
import { ICCIReport } from '../models/ccireport';
import { CCIReportService } from '../services/ccireport';

@Component({
  selector: 'app-ccireport',
  templateUrl: './ccireport.component.html',
  styleUrls: ['./ccireport.component.css']
})
export class CcireportComponent implements OnInit {

  public ServiceInput;
  public NKDoor;
  public NKAccount;

  CCIReportArray: ICCIReport[];

  constructor(private CCIReportService: CCIReportService) { }

  getPosts(): void {
    this.CCIReportService.getCCIReport(this.ServiceInput, this.NKDoor, this.NKAccount)
        .subscribe(
            resultArray => this.CCIReportArray = resultArray,
            error => console.log("Error :: " + error)
        )
  }

  ngOnInit(): void {
  }

  sendRequest(){
    this.getPosts();
  }

}
