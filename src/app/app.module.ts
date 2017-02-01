import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CurrencyService } from './currency.service';
import { BondsDirective } from './bonds.directive';
import { StocksComponent } from './stocks/stocks.component';
import { HighlightDirective } from './highlight.directive';
import { StockDirectiveDirective } from './stock-directive.directive'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BondsDirective,
    StocksComponent,
    HighlightDirective,
    StockDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
