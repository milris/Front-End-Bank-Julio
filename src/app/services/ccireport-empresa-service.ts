import { Injectable, Input } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ICCIReportEmpresa } from "../models/ccireportEmpresa";

@Injectable()
export class CCIReportEmpresaService {

  private CCIReportEmpresaiURL = "http://localhost:4200/projekat/setblocchi";
 
     constructor(private http: Http) {
     }
 
     getCCIReportEmpresa(userId, office, bill): Observable<ICCIReportEmpresa[]> {
        return this.http.post(this.CCIReportEmpresaiURL, {
            "serviceInput": {
            "ahHeaderType": "F",
            "ahUserId": userId,
            "ahDomainId": "12",
            "ahNodeId": "110",
            "ahCodCentro": "9498",
            "ahChannelType": "107"
            },
        "codConto": office,
        "codSportello": bill
        })
            .map((response) => {
            return <ICCIReportEmpresa[]>response.json();
        });
    }
}