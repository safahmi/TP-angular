import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { SortingIconComponent } from './sorting-icon/sorting-icon.component';
import { SingleTransactionDetailComponent } from './single-transaction-detail/single-transaction-detail.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, TransactionsComponent, SortingIconComponent, SingleTransactionDetailComponent, HeaderComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
