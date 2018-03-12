import { Component, OnInit } from '@angular/core';
import { IEblocking } from '../models/e-blocking';
import { EBlockingService } from '../services/eblocking-service';

@Component({
  selector: 'app-eblocking',
  templateUrl: './eblocking.component.html',
  styleUrls: ['./eblocking.component.css']
})
export class EblockingComponent implements OnInit {

  _eblockingArray: IEblocking[];

  constructor(private EBlockingService : EBlockingService) { }

  getPosts(): void {
    this.EBlockingService.getEblocking()
        .subscribe(
            resultArray => this._eblockingArray = resultArray,
            error => console.log("Error :: " + error)
        )
  }

  ngOnInit(): void {
  }

  sendRequest(){
    this.getPosts();
  }

}

