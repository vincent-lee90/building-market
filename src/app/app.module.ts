import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import { AppComponent } from './app.component';
import {IndexComponent} from './index/index.component';
import {SliderComponent} from './slider/slider.component';
import {MainMenuComponent} from './main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SliderComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
