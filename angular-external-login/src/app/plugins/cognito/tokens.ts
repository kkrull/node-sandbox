import { InjectionToken } from '@angular/core';

export interface CognitoConfig {
  baseUrl: URL;
  appClient: {
    clientId: string;
  };
}

export const CognitoConfigToken = new InjectionToken<CognitoConfig>('CognitoConfig');
