import { InjectionToken } from '@angular/core';

export interface IdentityServerConfig {
  baseUrl: URL;
  appClient: {
    clientId: string;
  };
}

export const IdentityServerConfigToken = new InjectionToken<IdentityServerConfig>('IdentityServerConfig');
