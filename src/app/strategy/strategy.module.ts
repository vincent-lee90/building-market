import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {strategyRoutes} from './stragety.routes';
import {MainMenuModule} from '../share/main-menu/main-menu.module';
import {StrategyListComponent} from './strategy-list/strategy-list.component';
import {StrategyDetailComponent} from './strategy-detail/strategy-detail.component';
@NgModule({
  imports: [
    MainMenuModule,
    RouterModule.forChild(strategyRoutes)
  ],
  providers: [],
  declarations: [StrategyListComponent, StrategyDetailComponent]
})
export class StrategyModule {

}
