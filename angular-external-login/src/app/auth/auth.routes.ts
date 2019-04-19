import { Routes } from '@angular/router';

import { CallbackComponent } from './login/callback.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

export const AUTH_ROUTES: Routes = [
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
];
