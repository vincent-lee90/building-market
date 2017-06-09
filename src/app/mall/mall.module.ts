import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {mallRoutes} from './mall.routes';
import {StoresComponent} from "./stores/stores.component";
import {MallComponent} from "./mall/mall.component";
import{MainMenuModule} from "../share/main-menu/main-menu.module"
import {ListComponent} from "./list/list.component";
import {DetailComponent} from './detail/detail.component';
import {MallSearchComponent} from './mall-search/mall-search.component';
import {MallCategoryComponent} from './mall-category/mall-category.component';
import {MallService} from './service/mall.service';
@NgModule({
  declarations: [
    StoresComponent,
    MallComponent,
    ListComponent,
    DetailComponent,
    MallSearchComponent,
    MallCategoryComponent
  ],
  imports: [
    MainMenuModule,
    CommonModule,
    RouterModule.forChild(mallRoutes)
  ],
  providers: [MallService]
})
export class MallModule {
}
