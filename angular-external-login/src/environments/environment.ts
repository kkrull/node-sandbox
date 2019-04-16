// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

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

export const environment: Environment = {
  production: false,
  identityProvider: {
    baseUrl: new URL('https://cognito-idp.us-east-1.amazonaws.com/us-east-1_N8OfbsdVa'),
    appClient: {
      clientId: '2fe9dfh5ictve3n26c3jjvph2l'
    }
  }
};

export const EnvironmentToken: InjectionToken<Environment> = new InjectionToken('Environment');
