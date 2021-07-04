import { Component, Output,  OnInit } from '@angular/core';
import {BankingSharedService} from '../../../shared/banking-shared.service';

@Component({
  selector: 'app-over-view',
  templateUrl: './over-view.component.html',
  styleUrls: ['./over-view.component.scss']
})
export class OverViewComponent implements OnInit {

  showModal: boolean = false;
  modalContent: any;

  constructor(public sharedService: BankingSharedService) { }

  ngOnInit(): void {
  }

  onSubmit(form: any): void {
    if (form.invalid) {
      return;
    }
    this.modalContent = form.value;
    this.showModal = true;

  }
  dialogConfirmation(form: any): void {
    if(form){
      this.sharedService.setTransferedData(this.modalContent);
      this.showModal = false;
    }else{
      this.showModal = false;
    }
  }

}
