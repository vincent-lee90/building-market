import {StrategyListComponent} from './strategy-list/strategy-list.component';
import {StrategyDetailComponent} from './strategy-detail/strategy-detail.component';
export const strategyRoutes = [
  {
    path: '',
    component: StrategyListComponent
  },
  {
    path:'detail/:id',
    component:StrategyDetailComponent
  }
];
