import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { environment } from '../../../environments/environment';
import { OpenIdConnectService } from '../../shared/services/interfaces/openid-connect.service';
import { TokenStorageService } from '../../shared/services/interfaces/token-storage.service';

import { AuthGuard, LoginRouteToken } from './auth-guard';
import { CognitoOpenIdConnectService } from './openid-connect.service';
import { CognitoTokenStorageService } from './token-storage-service';

@NgModule()
export class CognitoModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CognitoModule,
      providers: [
        AuthGuard,
        { provide: LoginRouteToken, useValue: ['/auth', 'login'] }, // TODO KDK: This is why CognitoModule and AuthModule should be the same
        {
          provide: OpenIdConnectService,
          deps: [HttpClient],
          useFactory: (http: HttpClient) => {
            return new CognitoOpenIdConnectService(
              http,
              environment.identityProvider.baseUrl,
              environment.identityProvider.appClient.clientId
            );
          }
        },
        { provide: TokenStorageService, useClass: CognitoTokenStorageService }
      ]
    };
  }
}
