import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import { AppComponent } from './app.component';
import {IndexComponent} from './index/index.component';
import {ManualComponent} from './manual/manual.component';
import {SliderModule} from './share/slider/slider.module';
import {MainMenuModule} from './share/main-menu/main-menu.module';
import {AuthGuardService} from './auth-guard/auth-guard.service';
import {AuthGuard} from './auth-guard/auth-guard';
@NgModule({
  declarations: [
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
