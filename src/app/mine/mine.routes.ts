import {MineComponent} from './mine/mine.component';
import {OrdersComponent} from './orders/orders.component';
import {AuthGuard} from '../auth-guard/auth-guard';
import {JoinUsComponent} from './join-us/join-us.component';
import {AgreementComponent} from "./agreement/agreement.component";
import {BaseInfoComponent} from "./join-us/base-info/base-info.component";
import {StoreInfoComponent} from "./join-us/store-info/store-info.component";
import {UploadImgComponent} from "app/mine/join-us/upload-img/upload-img.component";

export const mineRoutes = [
  {
    path: '',
    component: MineComponent,
  },
  {
    path: 'join-us',
    canActivate: [AuthGuard],
    component: JoinUsComponent,
    children: [
      {
        path: '', redirectTo: 'base-info', pathMatch: 'full'
      },

      {
        path: 'base-info', component: BaseInfoComponent,
      },
      {
        path: 'store-info', component: StoreInfoComponent
      },
      {
        path: 'upload-img', component: UploadImgComponent,
      },
      {
        path: '**', redirectTo: 'base-info'
      }
    ]

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
    path: 'orders/:orderStatus',
    canActivate: [AuthGuard],
    component: OrdersComponent
  }
];
