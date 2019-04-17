import { Routes } from '@angular/router';

import { CognitoAuthGuard } from './shared/services/cognito/cognito-auth-guard';

import { LoginComponent } from './auth/login.component';
import { LoginCallbackComponent } from './auth/login-callback.component';
import { LogoutComponent } from './auth/logout.component';
import { ChangeToExternalSignInUrl } from './auth/services/change-to-sign-in-url.resolve';
import { GuardedComponent } from './guarded/guarded.component';
import { TutorialComponent } from './tutorial/tutorial.component';

export const APP_ROUTES: Routes = [
  {
    path: 'callback',
    component: LoginCallbackComponent
  },
  {
    path: 'guarded',
    component: GuardedComponent,
    canActivate: [CognitoAuthGuard]
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
    path: 'tutorial',
    component: TutorialComponent
  }
];
