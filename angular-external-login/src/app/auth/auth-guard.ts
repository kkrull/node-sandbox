import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, NavigationExtras, Router, RouterStateSnapshot } from '@angular/router';

import { TokenStorageService } from '../shared/services/identity-provider-plugin-interfaces';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private storage: TokenStorageService,
              private router: Router) { }

  canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const accessToken = this.storage.readAccessToken();
    if (accessToken) {
      return true;
    }

    this.router.navigate(['/auth', 'login'], this.returnToRoute(state.url));
    return false;
  }

  private returnToRoute(returnRoute: string): NavigationExtras {
    return {
      queryParams: { return_route: returnRoute }
    };
  }
}
