import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {mallRoutes} from './mall.routes';
import {StoreComponent} from "./store/store.component";
import {MallComponent} from "./mall/mall.component";
import{MainMenuModule} from "../share/main-menu/main-menu.module"
import {ListComponent} from "./list/list.component";
import {DetailComponent} from './detail/detail.component';
import {MallSearchComponent} from './mall-search/mall-search.component';
import {MallCategoryComponent} from './mall-category/mall-category.component';
import {AmountComponent} from './amount/amount.component';
import {ConfirmOrderComponent} from './confirm-order/confirm-order.component'
import {MallService} from './service/mall.service';
import {SliderModule} from "../share/slider/slider.module";
@NgModule({
  declarations: [
    StoreComponent,
    MallComponent,
    ListComponent,
    DetailComponent,
    MallSearchComponent,
    MallCategoryComponent,
    AmountComponent,
    ConfirmOrderComponent
  ],
  imports: [
    MainMenuModule,
    CommonModule,
    RouterModule.forChild(mallRoutes),
    SliderModule
  ],
  providers: [MallService]
})
export class MallModule {
}
