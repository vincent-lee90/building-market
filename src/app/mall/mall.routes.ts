import {StoresComponent} from "./stores/stores.component";
import {MallComponent} from "./mall/mall.component";
export const mallRoutes=[
  {
    path:'',
    component:MallComponent
  },{
  path:'./stores',
    component:StoresComponent
  }
];
