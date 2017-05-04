import {MineComponent} from './mine/mine.component';
import {OrdersComponent} from './orders/orders.component';
import {AuthGuard} from '../auth-guard/auth-guard';

export const mineRoutes=[
  {
    path:'',
    canActivate:[AuthGuard],
    component:MineComponent,
    loadChild:[
      {
        path:'',
        component:MineComponent
      },
      {
        path:'./orders',
        component:OrdersComponent
      }
    ]
  }
];
