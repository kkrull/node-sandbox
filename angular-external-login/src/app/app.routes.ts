import { Routes } from '@angular/router';

import { CognitoAuthGuard } from './shared/services/cognito/cognito-auth-guard';

import { GuardedComponent } from './guarded/guarded.component';
import { LoginComponent } from './login/login.component';
import { LoginCallbackComponent } from './login/login-callback.component';
import { LogoutComponent } from './login/logout.component';
import { ChangeToExternalSignInUrl } from './login/services/change-to-sign-in-url.resolve';
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
