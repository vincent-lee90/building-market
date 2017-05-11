import {MineComponent} from './mine/mine.component';
import {OrdersComponent} from './orders/orders.component';
import {AuthGuard} from '../auth-guard/auth-guard';
import {JoinUsComponent} from './join-us/join-us.component';

export const mineRoutes=[
  {
    path:'',
    component:MineComponent,
  },
  {
    path:'join-us',
    component:JoinUsComponent
  },
  {
    path:'orders',
    component:OrdersComponent
  }
];
