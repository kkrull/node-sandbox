import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

export interface ExternalUrlRouteData {
  targetUrl(): Observable<URL>;
}

export abstract class OpenIdConnectService {
  abstract authorizationUrl(): Observable<URL>;
}

// Resolves to nothing, but has a handy side-effect of completely changing out of this app and to another URL
@Injectable()
export class ChangeToExternalUrl implements Resolve<URL> {
  constructor(private openIdConnect: OpenIdConnectService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<URL> {
    const routeData = route.data as ExternalUrlRouteData;
    return routeData.targetUrl().pipe(
      tap((targetUrl: URL) => {
        window.location.href = targetUrl.href;
      })
    );
  }
}
