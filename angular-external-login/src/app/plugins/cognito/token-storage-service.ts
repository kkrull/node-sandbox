import { Injectable } from '@angular/core';

import { ReadWriteStorage } from '../../shared/services/storage-interfaces';
import { TokenStorageService } from '../../shared/services/identity-provider-plugin-interfaces';

const ACCESS_TOKEN = 'CognitoAccessToken';
const ID_TOKEN = 'CognitoIdToken';

@Injectable()
export class CognitoTokenStorageService extends TokenStorageService {
  constructor(private storage: ReadWriteStorage) {
    super();
  }

  readAccessToken(): string {
    return this.storage.getItem(ACCESS_TOKEN);
  }

  saveAccessToken(token: string): void {
    this.storage.setItem(ACCESS_TOKEN, token);
  }

  readIdentityToken(): string {
    return this.storage.getItem(ID_TOKEN);
  }

  saveIdentityToken(token: string): void {
    this.storage.setItem(ID_TOKEN, token);
  }

  removeAllTokens(): void {
    this.storage.removeItem(ACCESS_TOKEN);
    this.storage.removeItem(ID_TOKEN);
  }
}
