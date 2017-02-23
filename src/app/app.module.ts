import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CurrencyService } from './currency.service';
import { StockService } from './stock.service';
import { BondsDirective } from './bonds.directive';
import { StocksComponent } from './stocks/stocks.component';
import { HighlightDirective } from './highlight.directive';
import { StockDirectiveDirective } from './stock-directive.directive';
import { StockComponent } from './stock/stock.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BondsDirective,
    StocksComponent,
    HighlightDirective,
    StockDirectiveDirective,
    StockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRouting
  ],
  providers: [CurrencyService, StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
