import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { OpenIdConnectService } from '../../shared/services/interfaces/openid-connect.service';
import { TokenStorageService } from '../../shared/services/interfaces/token-storage.service';

import { AuthGuard } from './auth-guard';
import { CognitoOpenIdConnectService } from './openid-connect.service';
import { CognitoTokenStorageService } from './token-storage-service';

export interface CognitoConfig {
  baseUrl: URL;
  appClient: {
    clientId: string;
  };
}

export interface WebAppRoutes {
  loginRoute: any[];
}

@NgModule()
export class CognitoModule {
  static forRoot(idpConfig: CognitoConfig, routes: WebAppRoutes): ModuleWithProviders {
    return {
      ngModule: CognitoModule,
      providers: [
        {
          provide: AuthGuard,
          deps: [TokenStorageService, Router],
          useFactory: (tokenStorage: TokenStorageService, router: Router) =>
            new AuthGuard(routes.loginRoute, tokenStorage, router)
        },
        {
          provide: OpenIdConnectService,
          deps: [HttpClient],
          useFactory: (http: HttpClient) =>
            new CognitoOpenIdConnectService(
              http,
              idpConfig.baseUrl,
              idpConfig.appClient.clientId
            )
        },
        { provide: TokenStorageService, useClass: CognitoTokenStorageService }
      ]
    };
  }
}
