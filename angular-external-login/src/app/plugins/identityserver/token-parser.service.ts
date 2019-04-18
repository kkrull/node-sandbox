import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

import { CallbackUrlTokenParser, Tokens } from '../../shared/services/identity-provider-plugin-interfaces';

@Injectable()
export class QueryStringTokenParser extends CallbackUrlTokenParser {
  parseTokens(routeSnapshot: ActivatedRouteSnapshot): Tokens { // TODO KDK: It's actually still the fragment
    const params = new URLSearchParams(routeSnapshot.fragment);
    return {
      accessToken: params.get('access_token'),
      expiresIn: params.get('expires_in'),
      idToken: params.get('id_token'),
      type: params.get('token_type'),
    };
  }
}
