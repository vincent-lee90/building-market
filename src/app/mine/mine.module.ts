import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {MainMenuModule} from '../share/main-menu/main-menu.module';
import {mineRoutes} from './mine.routes'
import {MineComponent} from './mine/mine.component';
import {OrdersComponent} from './orders/orders.component'
import {JoinUsComponent} from './join-us/join-us.component';
import {AgreementComponent} from "./agreement/agreement.component";
import {MineService} from "./service/mine.service";
import {BaseInfoComponent} from "./join-us/base-info/base-info.component";
import {StoreInfoComponent} from "./join-us/store-info/store-info.component";
import {UploadImgComponent} from "./join-us/upload-img/upload-img.component";
import {FileUploadModule} from "../share/file-upload/file-upload.module";
import {MyStoreComponent} from "./my-store/my-store.component";
import {StoreDisplayComponent} from "./my-store/store-display/store-display.component";
import {EditProductComponent} from "./my-store/edit-product/edit-product.component";
import {ProductCategoryPipe} from "../pipes/product-category.pipe";
import {EditStoreComponent} from "./my-store/store-info/edit-store.component";


@NgModule({
  imports:[
    FileUploadModule,
    MainMenuModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(mineRoutes)
  ],
  providers:[MineService],
  declarations:[MineComponent,OrdersComponent,JoinUsComponent,BaseInfoComponent,StoreInfoComponent,UploadImgComponent,AgreementComponent,MyStoreComponent,EditProductComponent,StoreDisplayComponent,ProductCategoryPipe,EditStoreComponent]
})
export class MineModule{
}
