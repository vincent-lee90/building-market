import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MainMenuModule} from '../share/main-menu/main-menu.module';
import {AuthGuard} from '../auth-guard/auth-guard';
import {mineRoutes} from './mine.routes'
import {MineComponent} from './mine/mine.component';
import {OrdersComponent} from './orders/orders.component'
@NgModule({
  imports:[
    MainMenuModule,
    RouterModule.forChild(mineRoutes)
  ],
  providers:[AuthGuard],
  declarations:[MineComponent,OrdersComponent]
})
export class MineModule{

}
