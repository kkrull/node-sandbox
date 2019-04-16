import { Routes } from '@angular/router';
import { of } from 'rxjs/observable/of';

import { GuardedComponent } from './guarded/guarded.component';
import { LoginComponent } from './login/login.component';
import { ExternalUrlRouteData } from './login/services/change-to-external-url.resolve';
import { ExternalUrlResolverToken } from './login/services/tokens';
import { TutorialComponent } from './tutorial/tutorial.component';
import { LoginCallbackComponent } from './login/login-callback.component';

const loginRouteData: ExternalUrlRouteData = {
  targetUrl: () => {
    const url = new URL('https://skydevelopers.auth.us-east-1.amazoncognito.com/oauth2/authorize');
    url.searchParams.append('client_id', '2fe9dfh5ictve3n26c3jjvph2l');
    url.searchParams.append('redirect_uri', 'http://localhost:4200/callback');
    url.searchParams.append('response_type', 'token');

    return of(url);
  },
};

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
