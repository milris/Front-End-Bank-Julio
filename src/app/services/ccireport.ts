import { Injectable, Input } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ICCIReport } from "../models/ccireport";

@Injectable()
export class CCIReportService {

  private CCIReportiURL = "http://localhost:4200/projekat/setblocchi";
 
     constructor(private http: Http) {
     }
 
     getCCIReport(ServiceInput, NKDoor, NKAccount): Observable<ICCIReport[]> {
        return this.http.post(this.CCIReportiURL, {
            "ServiceInput": ServiceInput,
            "NKDoor": NKDoor,
            "NKAccount": NKAccount
        })
            .map((response) => {
            return <ICCIReport[]>response.json();
        });
    }
}