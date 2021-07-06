import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverViewComponent } from './over-view.component';
import {BankingSharedService} from '../../../shared/banking-shared.service';

describe('OverViewComponent', () => {
  let component: OverViewComponent;
  let fixture: ComponentFixture<OverViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverViewComponent ],
      providers: [
        { provide: BankingSharedService,}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
