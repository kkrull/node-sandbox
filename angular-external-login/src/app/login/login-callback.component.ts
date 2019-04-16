import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';

import { ReadWriteStorage } from './services/token-storage.service';

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
export class LoginCallbackComponent implements OnInit {
  urlFragment$: Observable<string>;
  tokensAsJson$: Observable<string>;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private storage: ReadWriteStorage) {
    this.urlFragment$ = activatedRoute.fragment;

    this.tokensAsJson$ = activatedRoute.fragment.pipe(
      map(fragment => {
        const params = new URLSearchParams(fragment);
        return {
          accessToken: params.get('access_token'),
          expiresIn: params.get('expires_in'),
          idToken: params.get('id_token'),
          type: params.get('token_type'),
        };
      }),
      tap((tokens: Tokens) => {
        this.storage.setItem('CognitoAccessToken', tokens.accessToken);
        this.storage.setItem('CognitoIdToken', tokens.idToken);
      }),
      map((tokens: Tokens) => JSON.stringify(tokens, null, 2))
    );
  }

  ngOnInit(): void {
    const location: Location = window.location;
    const urlWithoutFragment = location.toString().replace(/#.*/, '');
    console.log('location', location);
    console.log('without fragment', urlWithoutFragment);

    this.router.navigateByUrl('/');
  }
}
