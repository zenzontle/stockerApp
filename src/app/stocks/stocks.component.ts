import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';

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

  constructor(stockService: StockService) {
    this.stocks = stockService.getStocks();
  }

  ngOnInit() {
  }

  // tslint:disable-next-line:member-ordering
  isCenter = false;
  isColorBrown = true;

  myColor = 'blue';
  mySize = '200%';
  market = 'LSE';

  title = 'List of Stocks: ';
  stocks;
}
