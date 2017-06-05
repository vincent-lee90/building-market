import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {AppAlertComponent} from "./app-alert/app-alert.component";
import {LoadingComponent} from "./loading/loading.component";
@NgModule({
  imports:[CommonModule],
  declarations:[LoadingComponent,AppAlertComponent],
  exports:[LoadingComponent,AppAlertComponent]
})
export class MyDialogModule{}
