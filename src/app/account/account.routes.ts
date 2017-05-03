import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ResetComponent} from './reset/reset.component';
export const accountRoutes = [
  {
    path: '',
    component: LoginComponent
  }, {
    path: 'register',
    component: RegisterComponent
  }, {
    path: 'reset',
    component: ResetComponent
  }
];
