import { Routes } from '@angular/router';

import { AuthGuard } from './plugins/cognito/auth-guard';

import { AUTH_ROUTES } from './auth/auth.routes';
import { GuardedComponent } from './guarded/guarded.component';
import { ReferenceComponent } from './reference/reference.component';

export const APP_ROUTES: Routes = [
  {
    path: 'auth',
    children: AUTH_ROUTES
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
