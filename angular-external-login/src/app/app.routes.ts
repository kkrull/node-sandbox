import { Routes } from '@angular/router';

import { GuardedComponent } from './guarded/guarded.component';
import { LoginComponent } from './login/login.component';
import { ExternalUrlRouteData } from './login/services/change-to-external-url.resolve';
import { ExternalUrlResolverToken } from './login/services/tokens';
import { TutorialComponent } from './tutorial/tutorial.component';

const loginRouteData: ExternalUrlRouteData = {
  targetUrl: new URL('https://skydevelopers.auth.us-east-1.amazoncognito.com/login?response_type=token&client_id=2fe9dfh5ictve3n26c3jjvph2l&redirect_uri=http://localhost:4200/tutorial')
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
