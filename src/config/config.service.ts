import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, catchError } from "rxjs/operators";

@Injectable()
  export class DataloadService {

    constructor(private http: HttpClient) { }

    LoadData(): Observable<any> {
      return this.http.get('https://r9vdzv10vd.execute-api.eu-central-1.amazonaws.com/dev/transactions').pipe(
        map((res: any) => {
          return res;
        }),
        catchError(<T>(error: any, result?: T) => {
          return this.loadMockJson();
        })
      );
    }

    loadMockJson(): Observable<any> {
      return this.http.get('assets/mock-data/transactions.json').pipe(
        map((res: any) => {
          return res.data;
        }),
        catchError(<T>(error: any, result?: T) => {
          return of(result as T);
        })
      );
    }

}