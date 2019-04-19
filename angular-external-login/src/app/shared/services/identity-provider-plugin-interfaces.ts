import { Observable } from 'rxjs/Observable';
import { ActivatedRouteSnapshot } from '@angular/router';

export interface Tokens {
  accessToken: string;
  expiresIn: string;
  idToken: string;
  type: string;
}

export abstract class CallbackUrlTokenParser {
  abstract parseTokens(routeSnapshot: ActivatedRouteSnapshot): Tokens;
}

export abstract class OpenIdConnectService {
  abstract authorizationUrl(redirectUri: URL): Observable<URL>;
}

export abstract class TokenStorageService {
  abstract readAccessToken(): string;
  abstract saveAccessToken(token: string): void;

  abstract readIdentityToken(): string;
  abstract saveIdentityToken(token: string): void;

  abstract removeAllTokens(): void;
}
