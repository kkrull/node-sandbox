import { Environment } from './environment.service';

export const environment: Environment = {
  production: true,
  identityProvider: {
    baseUrl: new URL('https://cognito-idp.<aws_region>.amazonaws.com/<user_pool_id>'),
    appClient: {
      clientId: 'app_client_id'
    }
  }
};
