import { OpenIdConnectService } from '../../../login/services/change-to-sign-in-url.resolve';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, tap } from 'rxjs/operators';

interface ImplicitAppClientConfig {
  clientId: string;
}

interface IdentityProviderConfig {
  baseUrl: URL;
  appClient: ImplicitAppClientConfig;
}

export class CognitoOpenIdConnectService extends OpenIdConnectService {
  private config: IdentityProviderConfig;

  constructor() {
    super();

    this.config = {
      baseUrl: new URL('https://cognito-idp.us-east-1.amazonaws.com/us-east-1_N8OfbsdVa'),
      appClient: {
        clientId: '2fe9dfh5ictve3n26c3jjvph2l'
      }
    };
  }

  authorizationUrl(): Observable<URL> {
    return of(this.configUrl()).pipe(
      map(configUrl => this.authorizationEndpoint(configUrl)),
      map(authEndpointUrl => this.authorizeThisApp(authEndpointUrl)),
      tap(x => console.log('authorization url', x.href))
    );
  }

  private configUrl(): URL {
    const configUrl = new URL(this.config.baseUrl.href);
    configUrl.pathname = configUrl.pathname + '/.well-known/openid-configuration';
    return configUrl;
  }

  private authorizationEndpoint(configUrl: URL): URL {
    return new URL('https://skydevelopers.auth.us-east-1.amazoncognito.com/oauth2/authorize');
  }

  private authorizeThisApp(authorizationEndpoint: URL): URL {
    const authorizationUrl = new URL(authorizationEndpoint.href);
    authorizationUrl.searchParams.append('client_id', this.config.appClient.clientId);
    authorizationUrl.searchParams.append('redirect_uri', 'http://localhost:4200/callback');
    authorizationUrl.searchParams.append('response_type', 'token');
    return authorizationUrl;
  }
}
