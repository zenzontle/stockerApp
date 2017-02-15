import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {StocksComponent} from './stocks/stocks.component';

const appRoutes: Routes = [{
    path:'stocks',
    component: StocksComponent
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