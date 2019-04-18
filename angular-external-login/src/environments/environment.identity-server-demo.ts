import { Environment } from './environment-config';

export const environment: Environment = {
  production: false,
  identityProvider: {
    baseUrl: new URL('https://demo.identityserver.io'),
    appClient: {
      clientId: 'implicit'
    }
  }
};
