import {IndexComponent} from './index/index.component';
export const appRoutes=[
  {
    path:'',
    redirectTo:'index',
    pathMatch:'full'
  },{
    path:'index',
    component:IndexComponent
  },{
  path:'mall',
    loadChildren:'./mall/mall.module#MallModule'
  }
];
