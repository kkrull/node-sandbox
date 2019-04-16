import { InjectionToken } from '@angular/core';

export interface ImplicitAppClientConfig {
  clientId: string;
}

export interface IdentityProviderConfig {
  baseUrl: URL;
  appClient: ImplicitAppClientConfig;
}

export interface Environment {
  production: boolean;
  identityProvider: IdentityProviderConfig;
}

export const EnvironmentToken: InjectionToken<Environment> = new InjectionToken('Environment');
