import {StoreComponent} from "./store/store.component";
import {MallComponent} from "./mall/mall.component";
import {ListComponent} from './list/list.component';
import {DetailComponent} from './detail/detail.component';
import {MallSearchComponent} from './mall-search/mall-search.component';
import {MallCategoryComponent} from './mall-category/mall-category.component';
import {ConfirmOrderComponent} from "./confirm-order/confirm-order.component";
import {AuthGuard} from "../auth-guard/auth-guard";
export const mallRoutes = [
  {
    path: '',
    component: MallComponent
  }, {
    path: 'list',
    component: ListComponent
  }, {
    path: 'store/:storeCode',
    component: StoreComponent
  }, {
    path: 'detail/:id',
    component: DetailComponent
  }, {
    path: 'mall-search',
    component: MallSearchComponent
  }, {
    path: 'mall-category',
    component: MallCategoryComponent
  }, {
    path: 'confirm-order',
    canActivate: [AuthGuard],
    component: ConfirmOrderComponent
  }, {
    path: '**',
    component: MallComponent
  }
];
