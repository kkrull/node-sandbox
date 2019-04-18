import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { OpenIdConnectService, TokenStorageService } from '../../shared/services/identity-provider-plugin-interfaces';

import { AuthGuard } from './auth-guard';
import { CognitoOpenIdConnectService } from './openid-connect.service';
import { CognitoTokenStorageService } from './token-storage-service';
import { CognitoConfig, CognitoConfigToken, LoginRouteToken } from './tokens';

export interface WebAppRoutes {
  loginRoute: any[];
}

export function makeAuthGuard(loginRoute: any[], tokenStorage: TokenStorageService, router: Router): AuthGuard {
  return new AuthGuard(loginRoute, tokenStorage, router);
}

export function makeOpenIdConnectService(idpConfig: CognitoConfig, http: HttpClient): OpenIdConnectService {
  return new CognitoOpenIdConnectService(idpConfig, http);
}

@NgModule()
export class CognitoServiceModule {
  static forRoot(idpConfig: CognitoConfig, routes: WebAppRoutes): ModuleWithProviders {
    return {
      ngModule: CognitoServiceModule,
      providers: [
        {
          provide: AuthGuard,
          deps: [LoginRouteToken, TokenStorageService, Router],
          useFactory: makeAuthGuard
        },
        { provide: CognitoConfigToken, useValue: idpConfig },
        { provide: LoginRouteToken, useValue: routes.loginRoute },
        {
          provide: OpenIdConnectService,
          deps: [CognitoConfigToken, HttpClient],
          useFactory: makeOpenIdConnectService
        },
        { provide: TokenStorageService, useClass: CognitoTokenStorageService }
      ]
    };
  }
}
