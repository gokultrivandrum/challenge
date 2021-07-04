import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeTransferComponent } from './make-transfer.component';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
describe('MakeTransferComponent', () => {
  let component: MakeTransferComponent;
  let fixture: ComponentFixture<MakeTransferComponent>;
  let  formBuilder: FormBuilder;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
