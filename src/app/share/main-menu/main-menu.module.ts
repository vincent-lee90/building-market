import {NgModule} from "@angular/core";
import {RouterModule} from '@angular/router';
import {MainMenuComponent} from "./main-menu.component";
@NgModule({
  imports:[RouterModule],
  declarations:[MainMenuComponent],
  exports:[MainMenuComponent]
})
export class MainMenuModule{}
