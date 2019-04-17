import { Routes } from '@angular/router';

import { AuthGuard } from './lib/auth-guard';

import { LoginComponent } from './auth/login.component';
import { LoginCallbackComponent } from './auth/login-callback.component';
import { LogoutComponent } from './auth/logout.component';
import { ChangeToExternalSignInUrl } from './lib/change-to-sign-in-url.resolve';
import { GuardedComponent } from './guarded/guarded.component';
import { ReferenceComponent } from './reference/reference.component';

const authRoutes: Routes = [
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

export const APP_ROUTES: Routes = [
  {
    path: 'auth',
    children: authRoutes
  },
  {
    path: 'guarded',
    component: GuardedComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'reference',
    component: ReferenceComponent
  }
];
