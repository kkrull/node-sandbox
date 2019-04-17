import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { ReadWriteStorage } from '../storage/read-write-storage.service';
import { Injectable } from '@angular/core';

export abstract class AuthGuard implements CanActivate {
  abstract canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean;
}

@Injectable()
export class CognitoAuthGuard extends AuthGuard {
  constructor(private storage: ReadWriteStorage, private router: Router) {
    super();
  }

  canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const accessToken = this.storage.getItem('CognitoAccessToken');
    if (accessToken) {
      return true;
    }

    this.router.navigate(['/login'], { queryParams: { return_route: state.url } });
    return false;
  }
}
