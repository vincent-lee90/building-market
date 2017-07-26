import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MainMenuModule} from '../share/main-menu/main-menu.module';
import {mineRoutes} from './mine.routes'
import {MineComponent} from './mine/mine.component';
import {OrdersComponent} from './orders/orders.component'
import {JoinUsComponent} from './join-us/join-us.component';
import {AgreementComponent} from "./agreement/agreement.component";

@NgModule({
  imports:[
    MainMenuModule,
    RouterModule.forChild(mineRoutes)
  ],
  providers:[],
  declarations:[MineComponent,OrdersComponent,JoinUsComponent,AgreementComponent]
})
export class MineModule{

}
