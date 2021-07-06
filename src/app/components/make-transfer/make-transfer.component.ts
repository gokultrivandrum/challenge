import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { faEuroSign, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { BankingSharedService } from '../../../shared/banking-shared.service';

@Component({
  selector: 'app-make-transfer',
  templateUrl: './make-transfer.component.html',
  styleUrls: ['./make-transfer.component.scss']
})
 

export class MakeTransferComponent implements OnInit {
  form: any = FormGroup;
  disabled: boolean = true;
  submitted = false;
  faEuroSign = faEuroSign ; 
  faCreditCard = faCreditCard; 
  totalBalance:number = 5824.76;  
  @Output() submitForm: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, public sharedService: BankingSharedService) {
    
   }

 
   ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fromAccount: [{value: `My Personal Account : € ${this.totalBalance}`, disabled: true}, [Validators.required]],
        toAccount: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        amount: ['', [Validators.required, Validators.pattern('^[^ ][0-9 ]+[^ ]$')]],        
        myControl2: this.totalBalance
      }
    );
    this.form.validator = this.comparisonValidator;
    
    this.sharedService.transferedData.subscribe((trandsferedDetails) => {
      if(trandsferedDetails){
        this.totalBalance = (this.totalBalance - Number(trandsferedDetails?.amount));
      }

    });

  }
  comparisonValidator(form: FormGroup) {
    if((form.get('myControl2')?.value - form.get('amount')?.value) <= 500){
      return { validAmount: true };
    }
    return null;
  }

  get validAmount(): AbstractControl {
    return this.form.controls['amount'];
  }

 
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(event: any): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.openDialog();
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  openDialog() {
    this.submitForm.emit(this.form);
  }

}
