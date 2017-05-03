import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {accountRoutes} from './account.routes';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ResetComponent} from './reset/reset.component';
@NgModule({
  imports: [
    RouterModule.forChild(accountRoutes)
  ],
  providers: [],
  declarations: [LoginComponent, RegisterComponent,ResetComponent]
})
export class AccountModule{

}
