import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { OpenIdConnectService } from '../../shared/services/interfaces/openid-connect.service';
import { TokenStorageService } from '../../shared/services/interfaces/token-storage.service';

import { AuthGuard, LoginRouteToken } from './auth-guard';
import { CognitoOpenIdConnectService } from './openid-connect.service';
import { CognitoTokenStorageService } from './token-storage-service';

export interface CognitoConfig {
  baseUrl: URL;
  appClient: {
    clientId: string;
  };
}

@NgModule()
export class CognitoModule {
  static forRoot(idpConfig: CognitoConfig): ModuleWithProviders {
    return {
      ngModule: CognitoModule,
      providers: [
        AuthGuard,
        { provide: LoginRouteToken, useValue: ['/auth', 'login'] },
        {
          provide: OpenIdConnectService,
          deps: [HttpClient],
          useFactory: (http: HttpClient) => {
            return new CognitoOpenIdConnectService(
              http,
              idpConfig.baseUrl,
              idpConfig.appClient.clientId
            );
          }
        },
        { provide: TokenStorageService, useClass: CognitoTokenStorageService }
      ]
    };
  }
}
