import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';

interface Tokens {
  accessToken: string;
  expiresIn: string;
  idToken: string;
  type: string;
}

@Component({
  selector: 'app-login-callback',
  templateUrl: './login-callback.component.html',
  styleUrls: ['./login-callback.component.css']
})
export class LoginCallbackComponent {
  urlFragment$: Observable<string>;
  tokens$: Observable<Tokens>;

  constructor(private route: ActivatedRoute) {
    this.urlFragment$ = route.fragment;

    this.tokens$ = route.fragment.pipe(
      map(fragment => {
        const params = new URLSearchParams(fragment);
        return {
          accessToken: params.get('access_token'),
          expiresIn: params.get('expires_in'),
          idToken: params.get('id_token'),
          type: params.get('token_type'),
        };
      })
    );
  }
}
