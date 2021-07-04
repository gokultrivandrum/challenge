import { Component, OnInit } from '@angular/core';
import { DataloadService } from '../../../config/config.service';
import { BankingSharedService } from '../../../shared/banking-shared.service';
import { faList } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-transcation-history',
  templateUrl: './transcation-history.component.html',
  styleUrls: ['./transcation-history.component.scss']
})

export class TranscationHistoryComponent implements OnInit {

  transcationData: any;
  filterArgs: string = '';
  faList =faList;

  constructor(public httpService: DataloadService, public sharedService: BankingSharedService) { }

  ngOnInit(): void {
    let obj = this.httpService.LoadData();
    obj.subscribe(data => {
      this.transcationData = data;
    })
    this.sharedService.transferedData.subscribe((trandsferedDetails) => {
      if(trandsferedDetails){
        const currentTranscation =
        {        
          categoryCode: '',
          dates!: { valueDate: new Date()},
          transaction!: {
            amountCurrency: {
              amount:'',
              currencyCode:''
            },
            type:'',
            creditDebitIndicator:''
          },
          merchant!: {
            name:'',
            accountNumber:''
          }
        }
        currentTranscation.transaction.amountCurrency.amount = trandsferedDetails.amount;
        currentTranscation.merchant.accountNumber = trandsferedDetails.toAccountNumber;
        currentTranscation.dates.valueDate = new Date();
        if (trandsferedDetails) {
          this.transcationData.push(currentTranscation);
        }
      }
    })
  }

  filterArgument(event: string): void {
    this.filterArgs = event;
  }

}
