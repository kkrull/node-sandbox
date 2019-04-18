import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';

import {
  CallbackUrlTokenParser,
  OpenIdConnectService,
  TokenStorageService
} from '../../shared/services/identity-provider-plugin-interfaces';

import { IdentityServerOpenIdConnectService } from './openid-connect.service';
import { IdentityServerTokenStorageService } from './token-storage-service';
import { IdentityServerConfig, IdentityServerConfigToken } from './tokens';
import { QueryStringTokenParser } from './token-parser.service';

export function makeOpenIdConnectService(idpConfig: IdentityServerConfig, http: HttpClient): OpenIdConnectService {
  return new IdentityServerOpenIdConnectService(idpConfig, http);
}

@NgModule()
export class IdentityServerServiceModule {
  static forRoot(idpConfig: IdentityServerConfig): ModuleWithProviders {
    return {
      ngModule: IdentityServerServiceModule,
      providers: [
        { provide: CallbackUrlTokenParser, useClass: QueryStringTokenParser },
        { provide: IdentityServerConfigToken, useValue: idpConfig },
        {
          provide: OpenIdConnectService,
          deps: [IdentityServerConfigToken, HttpClient],
          useFactory: makeOpenIdConnectService
        },
        { provide: TokenStorageService, useClass: IdentityServerTokenStorageService }
      ]
    };
  }
}
