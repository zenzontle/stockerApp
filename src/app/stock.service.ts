import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class StockService {

    constructor(private http: Http) {
    }

    getStocksApi(): Observable<any> {
        return this.http.get('http://localhost:4200/stocks')
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || ' Server Error '));
    }

    createStock(newStockCode: string, newName: string): Observable<any> {
        return this.http.post('http://localhost:4200/stocks', {name: newName, stockCode: newStockCode});
    }

    updateStock(stockId: string, newStockCode: string, newName: string): Observable<any> {
        return this.http.put('http://localhost:4200/stocks/' + stockId, {
            name: newName,
            stockCode: newStockCode
        });
    }

    deleteStock(stockId: string): Observable<any> {
        return this.http.delete('http://localhost:4200/stocks/' + stockId);
    }

    getStocks(): string[] {
        return ['AAPL', 'IBM', 'GOOG'];
    }
}
