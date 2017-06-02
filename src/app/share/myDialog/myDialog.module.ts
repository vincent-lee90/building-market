import {NgModule} from "@angular/core";
import {AlertComponent} from "./alert/alert.component";
import {LoadingComponent} from "./loading/loading.component";
@NgModule({
  imports:[],
  declarations:[LoadingComponent,AlertComponent],
  exports:[LoadingComponent,AlertComponent]
})
export class MyDialogModule{}
