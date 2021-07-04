import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class BankingSharedService {
  transferedData = new BehaviorSubject<any>(null);
  constructor() {}

  setTransferedData(data: any): void {
    this.transferedData.next(data);
  }
}
