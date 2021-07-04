import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BbUIModule } from './bb-ui/bb-ui.module';
import { OverViewComponent } from './components/over-view/over-view.component';
import { MakeTransferComponent } from './components/make-transfer/make-transfer.component';
import { TranscationHistoryComponent } from './components/transcation-history/transcation-history.component';
import { DataloadService } from '../config/config.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogContentComponent } from './components/dialog-content/dialog-content.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BankingSharedService} from '../shared/banking-shared.service';
import {FilterPipe} from '../shared/filter.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'      //Import here

@NgModule({
  declarations: [
    AppComponent,
    OverViewComponent,
    MakeTransferComponent,
    TranscationHistoryComponent,
    DialogContentComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, 
    BbUIModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    FontAwesomeModule
  ],
  providers: [DataloadService, FormsModule, BankingSharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
