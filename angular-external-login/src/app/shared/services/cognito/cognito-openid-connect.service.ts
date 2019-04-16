import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { Environment, EnvironmentToken, IdentityProviderConfig } from '../../../../environments/environment';
import { OpenIdConnectService } from '../../../login/services/change-to-sign-in-url.resolve';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

interface OpenIdConnectConfigResponse {
  authorization_endpoint: string;
}

@Injectable()
export class CognitoOpenIdConnectService extends OpenIdConnectService {
  private config: IdentityProviderConfig;

  constructor(private http: HttpClient,
              @Inject(EnvironmentToken) private environment: Environment) {
    super();
    this.config = environment.identityProvider;
    console.log('config', this.config);
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
