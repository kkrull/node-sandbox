import { Environment } from './environment';

export const environment: Environment = {
  production: true,
  identityProvider: {
    baseUrl: new URL('https://cognito-idp.us-east-1.amazonaws.com/us-east-1_N8OfbsdVa'),
    appClient: {
      clientId: '2fe9dfh5ictve3n26c3jjvph2l'
    }
  }
};
