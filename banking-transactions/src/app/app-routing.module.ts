import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleTransactionDetailComponent } from './single-transaction-detail/single-transaction-detail.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  { path: 'details', component: SingleTransactionDetailComponent },
  { path: 'all', component: TransactionsComponent },
  { path: '', redirectTo: 'all', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
