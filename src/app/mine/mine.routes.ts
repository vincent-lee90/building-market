import {MineComponent} from './mine/mine.component';
import {OrdersComponent} from './orders/orders.component';
import {AuthGuard} from '../auth-guard/auth-guard';
import {JoinUsComponent} from './join-us/join-us.component';
import {AgreementComponent} from "./agreement/agreement.component";

export const mineRoutes = [
  {
    path: '',
    component: MineComponent,
  },
  {
    path: 'join-us',
    canActivate: [AuthGuard],
    component: JoinUsComponent
  },
  {
    path: 'agreement',
    component: AgreementComponent
  },
  {
    path: 'orders',
    canActivate: [AuthGuard],
    component: OrdersComponent
  },
  {
    path:'orders/:orderStatus',
    canActivate: [AuthGuard],
    component:OrdersComponent
  }
];
