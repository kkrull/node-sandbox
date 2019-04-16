import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';

import { ReadWriteStorage } from '../shared/services/storage/read-write-storage.service';

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
      map(fragment => this.parseTokens(fragment)),
      tap(tokens => this.storeTokens(tokens)),
      map(tokens => JSON.stringify(tokens, null, 2))
    );
  }

  ngOnInit(): void {
    this.router.navigateByUrl('/guarded');
  }

  private parseTokens(fragmentOrQueryString: string) {
    const params = new URLSearchParams(fragmentOrQueryString);
    return {
      accessToken: params.get('access_token'),
      expiresIn: params.get('expires_in'),
      idToken: params.get('id_token'),
      type: params.get('token_type'),
    };
  }

  private storeTokens(tokens: Tokens) {
    this.storage.setItem('CognitoAccessToken', tokens.accessToken);
    this.storage.setItem('CognitoIdToken', tokens.idToken);
  }
}
