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
