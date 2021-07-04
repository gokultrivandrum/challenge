import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { faEuroSign, faCreditCard } from '@fortawesome/free-solid-svg-icons';

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
  totalBalance = 5824.76;  
  @Output() submitForm: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    
   }

 
   ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fromAccount: [{value: 'My Personal Account : € 5824.76', disabled: true}, [Validators.required]],
        toAccount: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        amount: ['', [Validators.required, this.comparePassword]]
      }
    );
  }
  comparePassword(control: AbstractControl) {
                     
    if ((control.value.length - 5824.76) > 500) {
      return { validAmount: true };
    }
    return null;
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
