import {StoresComponent} from "./stores/stores.component";
import {MallComponent} from "./mall/mall.component";
import {ListComponent} from './list/list.component';
import {DetailComponent} from './detail/detail.component';
export const mallRoutes = [
  {
    path: '',
    component: MallComponent
  }, {
    path: 'list/:category',
    component: ListComponent
  }, {
    path: 'stores',
    component: StoresComponent
  }, {
    path: 'detail',
    component: DetailComponent
  }
];
