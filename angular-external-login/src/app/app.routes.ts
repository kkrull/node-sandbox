import { Routes } from '@angular/router';

import { AuthGuard } from './lib/auth-guard';

import { LoginComponent } from './auth/login.component';
import { LoginCallbackComponent } from './auth/login-callback.component';
import { LogoutComponent } from './auth/logout.component';
import { ChangeToExternalSignInUrl } from './lib/change-to-sign-in-url.resolve';
import { GuardedComponent } from './guarded/guarded.component';
import { ReferenceComponent } from './reference/reference.component';

export const APP_ROUTES: Routes = [
  {
    path: 'callback',
    component: LoginCallbackComponent
  },
  {
    path: 'guarded',
    component: GuardedComponent,
    canActivate: [AuthGuard]
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
  },
  {
    path: 'reference',
    component: ReferenceComponent
  }
];
