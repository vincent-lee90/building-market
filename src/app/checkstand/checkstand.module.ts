import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {checkstandRoutes} from './checkstand.routes';
import {OrderComponent} from './order/order.component';
import {PayComponent} from './pay/pay.component';
@NgModule({
  imports:[
    RouterModule.forChild(checkstandRoutes)
  ],
  declarations:[],
  providers:[OrderComponent,PayComponent]
})
export class CheckstandModule{

}
