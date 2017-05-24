import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MainMenuModule} from '../share/main-menu/main-menu.module';
import {AuthGuard} from '../auth-guard/auth-guard';
import {AuthGuardService} from '../auth-guard/auth-guard.service';
import {mineRoutes} from './mine.routes'
import {MineComponent} from './mine/mine.component';
import {OrdersComponent} from './orders/orders.component'
import {JoinUsComponent} from './join-us/join-us.component';
@NgModule({
  imports:[
    MainMenuModule,
    RouterModule.forChild(mineRoutes)
  ],
  providers:[AuthGuard,AuthGuardService],
  declarations:[MineComponent,OrdersComponent,JoinUsComponent]
})
export class MineModule{

}
