import { Routes } from '@angular/router';

import { GuardedComponent } from './guarded/guarded.component';
import { LoginComponent } from './login/login.component';
import { ExternalUrlResolverToken } from './login/services/tokens';
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
      _unused: ExternalUrlResolverToken
    }
  },
  {
    path: 'tutorial',
    component: TutorialComponent
  }
];
