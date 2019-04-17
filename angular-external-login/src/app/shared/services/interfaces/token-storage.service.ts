export abstract class TokenStorageService {
  abstract readAccessToken(): string;
  abstract saveAccessToken(token: string): void;

  abstract readIdentityToken(): string;
  abstract saveIdentityToken(token: string): void;

  abstract removeAllTokens(): void;
}
