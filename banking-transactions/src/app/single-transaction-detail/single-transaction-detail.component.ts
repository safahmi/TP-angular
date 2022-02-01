import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleTransaction } from '../models/transaction-record.model';
import { TransactionsService } from '../transactions/transactions.service';

@Component({
  selector: 'app-single-transaction-detail',
  templateUrl: './single-transaction-detail.component.html',
  styleUrls: ['./single-transaction-detail.component.scss'],
})
export class SingleTransactionDetailComponent implements OnInit {
  singleTransaction: SingleTransaction = {
    id: '',
    amount: 0,
    balance: 0,
    label: '',
    date: '',
  };

  constructor(
    private transactionService: TransactionsService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const singleTransactionId =
      this._activatedRoute.snapshot.queryParamMap.get('id');
    console.log(singleTransactionId);
    if (singleTransactionId != null) {
      this.getSingleTransaction(singleTransactionId);
    }
  }

  getSingleTransaction(transactionId: string): void {
    this.transactionService
      .getTransactionById(transactionId)
      .subscribe((data) => {
        this.singleTransaction = data;
      });
  }
}
