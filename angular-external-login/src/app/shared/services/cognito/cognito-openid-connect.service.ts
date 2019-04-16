import { OpenIdConnectService } from '../../../login/services/change-to-sign-in-url.resolve';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

export class CognitoOpenIdConnectService extends OpenIdConnectService {
  authorizationUrl(): Observable<URL> {
    const configUrl = new URL('https://cognito-idp.us-east-1.amazonaws.com/us-east-1_N8OfbsdVa/.well-known/openid-configuration');

    const authorizationUrl = new URL('https://skydevelopers.auth.us-east-1.amazoncognito.com/oauth2/authorize');
    authorizationUrl.searchParams.append('client_id', '2fe9dfh5ictve3n26c3jjvph2l');
    authorizationUrl.searchParams.append('redirect_uri', 'http://localhost:4200/callback');
    authorizationUrl.searchParams.append('response_type', 'token');
    return of(authorizationUrl);
  }
}
