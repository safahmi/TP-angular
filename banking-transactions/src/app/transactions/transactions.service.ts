import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SingleTransaction } from '../models/transaction-record.model';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  _url: string = 'assets/data/transactions.json';

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<Array<SingleTransaction>> {
    return this.http.get<Array<SingleTransaction>>(this._url);
  }

  getTransactionById(id: string): Observable<SingleTransaction> {
    const urlById = 'assets/data/' + id + '.json';
    return this.http.get<SingleTransaction>(urlById);
  }
}
