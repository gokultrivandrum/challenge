import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscationHistoryComponent } from './transcation-history.component';
import { BankingSharedService } from '../../../shared/banking-shared.service';
import { DataloadService } from '../../../config/config.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {FilterPipe} from '../../../shared/filter.pipe';

describe('TranscationHistoryComponent', () => {
  let component: TranscationHistoryComponent;
  let fixture: ComponentFixture<TranscationHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      declarations: [ TranscationHistoryComponent, FilterPipe ],
      providers: [
        { provide: BankingSharedService},
        { provide: DataloadService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
