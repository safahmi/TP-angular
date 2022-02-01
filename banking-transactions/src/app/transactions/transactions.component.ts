import { Component } from '@angular/core';
import { SingleTransaction } from '../models/transaction-record.model';
import { TransactionsService } from './transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  providers: [TransactionsService],
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent {
  allTransactions: Array<SingleTransaction> = [];
  sortingObject: any = {
    id: 0,
    amount: 0,
    label: 0,
    date: 0,
    balance: 0,
  };

  constructor(private transactionService: TransactionsService) {}

  ngOnInit() {}

  showTransactions() {
    this.transactionService
      .getTransactions()
      .subscribe((data: Array<SingleTransaction>) => {
        this.allTransactions = data;
        console.log(this.allTransactions);
      });
  }
  compareId(elem1: SingleTransaction, elem2: SingleTransaction): number {
    if (elem1.id < elem2.id) {
      return -1;
    } else if (elem1.id > elem2.id) {
      return 1;
    }
    return 0;
  }
  compareAmount(elem1: SingleTransaction, elem2: SingleTransaction): number {
    return elem1.amount - elem2.amount;
  }
  compareBalance(elem1: SingleTransaction, elem2: SingleTransaction): number {
    return elem1.balance - elem2.balance;
  }
  compareLabel(elem1: SingleTransaction, elem2: SingleTransaction): number {
    return elem1.label.localeCompare(elem2.label);
  }
  compareDate(elem1: SingleTransaction, elem2: SingleTransaction): number {
    if (elem1.date < elem2.date) {
      return -1;
    } else if (elem1.date > elem2.date) {
      return 1;
    }
    return 0;
  }

  sort(columnName: string) {
    console.log(columnName);
    this.resetOtherSortingNumbers(columnName);
    this.singleColumnSorting(columnName);
  }

  // Trie les transactions en foncions de la colonne séléctionnée
  private singleColumnSorting(columnName: string) {
    if (this.sortingObject[columnName] < 1) {
      if (columnName === 'id') {
        this.allTransactions.sort(this.compareId);
      } else if (columnName === 'amount') {
        this.allTransactions.sort(this.compareAmount);
      } else if (columnName === 'balance') {
        this.allTransactions.sort(this.compareBalance);
      } else if (columnName === 'label') {
        this.allTransactions.sort(this.compareLabel);
      } else {
        this.allTransactions.sort(this.compareDate);
      }
      // Le champs dans sortingObject pour nom la valeur de columnName vaut 1 (ordre croissant)
      this.sortingObject[columnName] = 1;
    } else {
      // Ne trie pas mais inverse le tableau normalement trié par ordre croissant
      this.allTransactions.reverse();
      // Le champs dans sortingObject pour nom la valeur de columnName vaut -1 (ordre décroissant)
      this.sortingObject[columnName] = -1;
    }
  }

  // Met à 0 tous les champs de sortingObject sauf celui passé en paramètre
  private resetOtherSortingNumbers(columnName: string) {
    for (let property in this.sortingObject) {
      if (property !== columnName) {
        this.sortingObject[property] = 0;
      }
    }
  }
}
