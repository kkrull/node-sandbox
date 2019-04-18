import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { OpenIdConnectService } from '../../shared/services/interfaces/openid-connect.service';

interface OpenIdConnectConfigResponse {
  authorization_endpoint: string;
}

@Injectable()
export class CognitoOpenIdConnectService extends OpenIdConnectService {
  constructor(private http: HttpClient,
              private baseUrl: URL,
              private clientId: string) {
    super();
  }

  authorizationUrl(redirectUri: URL): Observable<URL> {
    return this.getDiscoveryDocument(this.configUrl()).pipe(
      map(idpConfig => idpConfig.authorization_endpoint),
      map(authEndpointUrl => this.authorizeThisApp(authEndpointUrl, redirectUri)),
    );
  }

  private configUrl(): URL {
    const configUrl = new URL(this.baseUrl.href);
    configUrl.pathname = Location.joinWithSlash(configUrl.pathname, '.well-known/openid-configuration');
    return configUrl;
  }

  private getDiscoveryDocument(url: URL) {
    return this.http.get(
      url.href, {
        observe: 'body',
        responseType: 'json'
      }
    ).pipe(map(response => response as OpenIdConnectConfigResponse));
  }

  private authorizeThisApp(authorizationEndpoint: string, redirectUri: URL): URL {
    const authorizationUrl = new URL(authorizationEndpoint);
    authorizationUrl.searchParams.append('client_id', this.clientId);
    authorizationUrl.searchParams.append('redirect_uri', redirectUri.href);
    authorizationUrl.searchParams.append('response_type', 'token');
    return authorizationUrl;
  }
}
