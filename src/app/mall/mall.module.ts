import {NgModule} from "@angular/core";
import {RouterModule} from '@angular/router';
import {mallRoutes} from './mall.routes';
import {StoresComponent} from "./stores/stores.component";
import {MallComponent} from "./mall/mall.component";
import{MainMenuModule} from "../share/main-menu/main-menu.module"
import {ListComponent} from "./list/list.component";
import {DetailComponent} from './detail/detail.component';
@NgModule({
  declarations: [
    StoresComponent,
    MallComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    MainMenuModule,
    RouterModule.forChild(mallRoutes)
  ],
  providers: []
})
export class MallModule {
}
