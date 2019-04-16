import { Routes } from '@angular/router';

import { GuardedComponent } from './guarded/guarded.component';
import { LoginComponent } from './login/login.component';
import { LoginCallbackComponent } from './login/login-callback.component';
import { ChangeToExternalSignInUrlToken } from './login/services/change-to-sign-in-url.resolve';
import { TutorialComponent } from './tutorial/tutorial.component';

export const APP_ROUTES: Routes = [
  {
    path: 'callback',
    component: LoginCallbackComponent
  },
  {
    path: 'guarded',
    component: GuardedComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    resolve: {
      _unused: ChangeToExternalSignInUrlToken
    }
  },
  {
    path: 'tutorial',
    component: TutorialComponent
  }
];
