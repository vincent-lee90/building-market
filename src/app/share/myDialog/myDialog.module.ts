import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {AppAlertComponent} from "./app-alert/app-alert.component";
import {LoadingComponent} from "./loading/loading.component";
import {AppConfirmComponent} from "./app-confirm/app-confirm.component";
@NgModule({
  imports:[CommonModule],
  declarations:[LoadingComponent,AppAlertComponent,AppConfirmComponent],
  exports:[LoadingComponent,AppAlertComponent,AppConfirmComponent]
})
export class MyDialogModule{}
