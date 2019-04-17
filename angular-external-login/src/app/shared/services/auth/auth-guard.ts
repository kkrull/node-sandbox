import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import { ReadWriteStorage } from '../storage/read-write-storage.service';
import { Injectable } from '@angular/core';

export abstract class AuthGuard implements CanActivate {
  abstract canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean;
}

@Injectable()
export class CognitoAuthGuard extends AuthGuard {
  constructor(private storage: ReadWriteStorage) {
    super();
  }

  canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): boolean {
    const accessToken = this.storage.getItem('CognitoAccessToken');
    console.log('[CognitoAuthGuard] accessToken', accessToken);
    return accessToken && true;
  }
}
