import {NgModule} from "@angular/core";
import {RouterModule} from '@angular/router';
import {mallRoutes} from './mall.routes';
import {StoresComponent} from "./stores/stores.component";
import {MallComponent} from "./mall/mall.component";
@NgModule({
  declarations: [
    StoresComponent,
    MallComponent
  ],
  imports: [
    RouterModule.forChild(mallRoutes)
  ],
  providers: []
})
export class MallModule { }
