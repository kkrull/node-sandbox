import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { OpenIdConnectService, TokenStorageService } from '../../shared/services/identity-provider-plugin-interfaces';

import { AuthGuard } from '../../auth/auth-guard';
import { CognitoOpenIdConnectService } from './openid-connect.service';
import { CognitoTokenStorageService } from './token-storage-service';
import { CognitoConfig, CognitoConfigToken } from './tokens';

export function makeOpenIdConnectService(idpConfig: CognitoConfig, http: HttpClient): OpenIdConnectService {
  return new CognitoOpenIdConnectService(idpConfig, http);
}

@NgModule()
export class CognitoServiceModule {
  static forRoot(idpConfig: CognitoConfig): ModuleWithProviders {
    return {
      ngModule: CognitoServiceModule,
      providers: [
        { provide: CognitoConfigToken, useValue: idpConfig },
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
