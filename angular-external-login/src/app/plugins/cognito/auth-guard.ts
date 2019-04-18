import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, NavigationExtras, Router, RouterStateSnapshot } from '@angular/router';

import { TokenStorageService } from '../../shared/services/identity-provider-plugin-interfaces';

import { LoginRouteToken } from './tokens';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(@Inject(LoginRouteToken) private loginRoute: any[],
              private storage: TokenStorageService,
              private router: Router) { }

  canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const accessToken = this.storage.readAccessToken();
    if (accessToken) {
      return true;
    }

    this.router.navigate(this.loginRoute, this.returnToRoute(state.url));
    return false;
  }

  private returnToRoute(returnRoute: string): NavigationExtras {
    return {
      queryParams: { return_route: returnRoute }
    };
  }
}
