import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

export interface ExternalUrlRouteData {
  targetUrl: URL;
}

// Resolves to nothing, but has a handy side-effect of completely changing out of this app and to another URL
export class ChangeToExternalUrl implements Resolve<void> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<void> {
    return Promise.resolve(route.data as ExternalUrlRouteData)
      .then(data => data.targetUrl)
      .then(targetUrl => {
        window.location.href = targetUrl.href;
      });
  }
}
