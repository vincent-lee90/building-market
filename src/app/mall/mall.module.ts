import {NgModule} from "@angular/core";
import {RouterModule} from '@angular/router';
import {mallRoutes} from './mall.routes';
import {StoresComponent} from "./stores/stores.component";
@NgModule({
  declarations: [
    StoresComponent
  ],
  imports: [
    RouterModule.forChild(mallRoutes)
  ],
  providers: []
})
export class MallModule { }
