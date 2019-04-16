import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { OpenIdConnectService } from '../../../login/services/change-to-sign-in-url.resolve';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

interface ImplicitAppClientConfig {
  clientId: string;
}

interface IdentityProviderConfig {
  baseUrl: URL;
  appClient: ImplicitAppClientConfig;
}

interface OpenIdConnectConfigResponse {
  authorization_endpoint: string;
}

@Injectable()
export class CognitoOpenIdConnectService extends OpenIdConnectService {
  private config: IdentityProviderConfig;

  constructor(private http: HttpClient) {
    super();

    // TODO KDK: Move to environment
    this.config = {
      baseUrl: new URL('https://cognito-idp.us-east-1.amazonaws.com/us-east-1_N8OfbsdVa'),
      appClient: {
        clientId: '2fe9dfh5ictve3n26c3jjvph2l'
      }
    };
  }

  authorizationUrl(): Observable<URL> {
    return this.getDiscoveryDocument(this.configUrl()).pipe(
      map(idpConfig => idpConfig.authorization_endpoint),
      map(authEndpointUrl => this.authorizeThisApp(authEndpointUrl)),
    );
  }

  private configUrl(): URL {
    const configUrl = new URL(this.config.baseUrl.href);
    configUrl.pathname = configUrl.pathname + '/.well-known/openid-configuration';
    return configUrl;
  }

  private getDiscoveryDocument(configUrl: URL) {
    return this.http.get(configUrl.href, {
      observe: 'body',
      responseType: 'json'
    }).pipe(
      map(response => response as OpenIdConnectConfigResponse)
    );
  }

  private authorizeThisApp(authorizationEndpoint: string): URL {
    const authorizationUrl = new URL(authorizationEndpoint);
    authorizationUrl.searchParams.append('client_id', this.config.appClient.clientId);
    authorizationUrl.searchParams.append('redirect_uri', 'http://localhost:4200/callback');
    authorizationUrl.searchParams.append('response_type', 'token');
    return authorizationUrl;
  }
}
