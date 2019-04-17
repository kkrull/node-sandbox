import { NgModule } from '@angular/core';

import { OpenIdConnectService } from '../../shared/services/interfaces/openid-connect.service';
import { TokenStorageService } from '../../shared/services/interfaces/token-storage.service';

import { AuthGuard, LoginRouteToken } from './auth-guard';
import { CognitoOpenIdConnectService } from './openid-connect.service';
import { CognitoTokenStorageService } from './token-storage-service';

@NgModule({
  imports: [],
  providers: [
    AuthGuard,
    { provide: LoginRouteToken, useValue: ['/auth', 'login'] },
    { provide: OpenIdConnectService, useClass: CognitoOpenIdConnectService },
    { provide: TokenStorageService, useClass: CognitoTokenStorageService }
  ],
  exports: []
})
export class CognitoModule { }
