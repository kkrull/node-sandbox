import { Routes } from '@angular/router';

import { GuardedComponent } from './guarded/guarded.component';
import { LoginComponent } from './login/login.component';
import { ExternalUrlRouteData } from './login/services/change-to-external-url.resolve';
import { ExternalUrlResolverToken } from './login/services/tokens';
import { TutorialComponent } from './tutorial/tutorial.component';

const loginRouteData: ExternalUrlRouteData = {
  targetUrl: new URL('http://www.google.com')
};

export const APP_ROUTES: Routes = [
  {
    path: 'guarded',
    component: GuardedComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    data: loginRouteData,
    resolve: {
      _unused: ExternalUrlResolverToken
    }
  },
  {
    path: 'tutorial',
    component: TutorialComponent
  }
];
