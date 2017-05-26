import {OrderComponent} from './order/order.component';
import {PayComponent} from './pay/pay.component';
import {CheckstandComponent} from './checkstand/checkstand.component';
import {AuthGuard} from '../auth-guard/auth-guard';
export const checkstandRoutes = [
  {
    path: '',
    component: CheckstandComponent,
    AuthGuard: [AuthGuard],
    children: [
      {
        path: '',
        component: OrderComponent
      }, {
        path: 'pay',
        component: PayComponent
      }
    ]
  },
];
