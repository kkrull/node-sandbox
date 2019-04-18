import { Observable } from 'rxjs/Observable';

export abstract class OpenIdConnectService {
  abstract authorizationUrl(redirectUri: URL): Observable<URL>;
}
