import { Routes } from '@angular/router';

import { ChangeToExternalSignInUrl } from './change-to-sign-in-url.resolve';
import { LoginComponent } from './login.component';
import { LoginCallbackComponent } from './login-callback.component';
import { LogoutComponent } from './logout.component';

export const AUTH_ROUTES: Routes = [
  {
    path: 'callback',
    component: LoginCallbackComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    resolve: {
      _unused: ChangeToExternalSignInUrl
    }
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
];
