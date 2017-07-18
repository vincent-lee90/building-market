import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {appRoutes} from './app.routes';
import { AppComponent } from './app.component';
import {IndexComponent} from './index/index.component';
import {ManualComponent} from './manual/manual.component';
import {SliderModule} from './share/slider/slider.module';
import {MainMenuModule} from './share/main-menu/main-menu.module';
import {MyDialogModule} from './share/myDialog/myDialog.module';
import {AuthGuardService} from './auth-guard/auth-guard.service';
import {AuthGuard} from './auth-guard/auth-guard';
import {AppDialogService} from './share/myDialog/app-alert/app-dialog.service';
import {PayComponent} from "./pay/pay.component";
@NgModule({
  declarations: [
    PayComponent,
    AppComponent,
    IndexComponent,
    ManualComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SliderModule,
    MainMenuModule,
    MyDialogModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    AuthGuard,
    AuthGuardService,
    AppDialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
