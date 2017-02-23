import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StockComponent } from './stock/stock.component';
import { StocksComponent } from './stocks/stocks.component';

const appRoutes: Routes = [{
    path: 'stocks',
    component: StocksComponent
}, {
    path: 'stock',
    component: StockComponent
}];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouting {}
