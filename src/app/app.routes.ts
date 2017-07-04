import {IndexComponent} from './index/index.component';
import {ManualComponent} from './manual/manual.component'
export const appRoutes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  }, {
    path: 'index',
    component: IndexComponent
  }, {
    path: 'mall',
    loadChildren: 'app/mall/mall.module#MallModule'
  }, {
    path: 'account',
    loadChildren: './account/account.module#AccountModule'
  }, {
    path: 'mine',
    loadChildren: './mine/mine.module#MineModule'
  }, {
    path: 'strategy',
    loadChildren: './strategy/strategy.module#StrategyModule'
  }, {
    path: 'manual',
    component: ManualComponent
  }
];
