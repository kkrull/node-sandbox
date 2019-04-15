import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

export class ExternalUrlResolve implements Resolve<string> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<string> {
    return Promise.resolve('http://www.google.com')
      .then(url => {
        window.location.href = url;
        return url;
      });
  }
}
