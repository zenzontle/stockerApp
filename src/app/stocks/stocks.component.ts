import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  constructor() {
    //this.stocks = stockService.getStocks();
  }

  ngOnInit() {
  }

  market = 'LSE';

  title = 'List of Stocks: ';
  // stocks = ['AAPL', 'IBM', 'GOOG'];
  stocks;

  stockMarkets = ['NYSE', 'NASDAQ', 'EURONEXT', 'HKSE', 'LSE'];


  
}
