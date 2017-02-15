import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css'],
  styles: [
    `.customClass{
      color: brown;
    }
    .centerClass{
      text-align: center;
    }
    `
  ]
})
export class StocksComponent implements OnInit {

  constructor() {
    //this.stocks = stockService.getStocks();
  }

  ngOnInit() {
  }

  isCenter = false;
  isColorBrown = true;

  myColor = 'blue';
  mySize = '200%';
  market = 'LSE';

  title = 'List of Stocks: ';
  stocks;

  stockMarkets = ['NYSE', 'NASDAQ', 'EURONEXT', 'HKSE', 'LSE'];
  
}
