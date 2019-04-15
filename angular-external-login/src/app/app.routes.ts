import { Routes } from '@angular/router';

import { GuardedComponent } from './guarded/guarded.component';
import { ExternalUrlResolveToken } from './external-url-resolve.token';
import { LoginComponent } from './login/login.component';
import { TutorialComponent } from './tutorial/tutorial.component';

export const APP_ROUTES: Routes = [
  {
    path: 'guarded',
    component: GuardedComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    resolve: {
      url: ExternalUrlResolveToken
    }
  },
  {
    path: 'tutorial',
    component: TutorialComponent
  }
];
