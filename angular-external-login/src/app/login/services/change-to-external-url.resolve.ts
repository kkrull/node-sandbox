import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

export interface ExternalUrlRouteData {
  targetUrl: string;
}

export class ChangeToExternalUrl implements Resolve<void> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<void> {
    return Promise.resolve(route.data as ExternalUrlRouteData)
      .then(data => data.targetUrl)
      .then(targetUrl => {
        console.log('targetUrl', targetUrl);
        // window.location.href = url;
      });
  }
}
