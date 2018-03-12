import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { IEblocking } from "../models/e-blocking";

@Injectable()
export class EBlockingService {

  private EblockingURL = "http://localhost:8080/projekat/customers";
 
     constructor(private http: Http) {
     }
 
    getEblocking(): Observable<IEblocking[]> {
        return this.http
            .get(this.EblockingURL)
            .map((response) => {
                return <IEblocking[]>response.json();
        });
    }
}