import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, NavigationExtras, Router, RouterStateSnapshot } from '@angular/router';

import { ReadWriteStorage } from '../storage/read-write-storage.service';

@Injectable()
export class CognitoAuthGuard implements CanActivate {
  constructor(private storage: ReadWriteStorage,
              private router: Router,
              private loginRoute: string[]) { }

  canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const accessToken = this.storage.getItem('CognitoAccessToken');
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
