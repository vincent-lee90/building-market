import {StoresComponent} from "./stores/stores.component";
import {MallComponent} from "./mall/mall.component";
import {ListComponent} from './list/list.component';
import {DetailComponent} from './detail/detail.component';
import {MallSearchComponent} from './mall-search/mall-search.component';
import {MallCategoryComponent} from './mall-category/mall-category.component';
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
  }, {
    path: 'mall-search',
    component: MallSearchComponent
  }, {
    path: 'mall-category',
    component: MallCategoryComponent
  }
];
