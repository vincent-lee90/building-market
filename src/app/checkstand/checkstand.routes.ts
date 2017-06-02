import {ConfirmOrderComponent} from './confirm-order/confirm-order.component';
import {PayComponent} from './pay/pay.component';
import {CheckstandComponent} from './checkstand/checkstand.component';
import {AuthGuard} from '../auth-guard/auth-guard';
export const checkstandRoutes = [
  {
    path: '',
    component: CheckstandComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'order', pathMatch: 'full'},
      {path: 'order', component: ConfirmOrderComponent},
      {path: 'pay', component: PayComponent}
    ]
  },
];
