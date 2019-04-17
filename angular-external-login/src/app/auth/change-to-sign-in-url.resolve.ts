import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

import { OpenIdConnectService } from '../shared/services/interfaces/openid-connect.service';

// Resolves to nothing, but has a handy side-effect of changing completely out of this app, to another URL
@Injectable()
export class ChangeToExternalSignInUrl implements Resolve<URL> {
  constructor(private identityProviderService: OpenIdConnectService) { }

  resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<URL> {
    return this.identityProviderService.authorizationUrl().pipe(
      tap(targetUrl => {
        window.location.href = targetUrl.href;
      })
    );
  }
}
