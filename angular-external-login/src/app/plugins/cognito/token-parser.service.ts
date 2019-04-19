import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

import { CallbackUrlTokenParser, Tokens } from '../../shared/services/identity-provider-plugin-interfaces';

@Injectable()
export class UrlFragmentTokenParser extends CallbackUrlTokenParser {
  parseTokens(routeSnapshot: ActivatedRouteSnapshot): Tokens {
    const params = new URLSearchParams(routeSnapshot.fragment);
    return {
      accessToken: params.get('access_token'),
      expiresIn: params.get('expires_in'),
      idToken: params.get('id_token'),
      type: params.get('token_type'),
    };
  }
}
