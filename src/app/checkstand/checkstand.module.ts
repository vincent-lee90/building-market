import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {checkstandRoutes} from './checkstand.routes';
import {OrderComponent} from './order/order.component';
import {PayComponent} from './pay/pay.component';
import {CheckstandComponent} from './checkstand/checkstand.component'
@NgModule({
  imports:[
    RouterModule.forChild(checkstandRoutes)
  ],
  declarations:[OrderComponent,PayComponent,CheckstandComponent],
  providers:[]
})
export class CheckstandModule{

}
