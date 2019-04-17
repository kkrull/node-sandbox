import { Observable } from 'rxjs/Observable';

export abstract class OpenIdConnectService {
  abstract authorizationUrl(): Observable<URL>;
}
