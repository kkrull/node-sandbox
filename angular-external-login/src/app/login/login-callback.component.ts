import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';

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
export class LoginCallbackComponent implements OnInit, OnDestroy {
  private tokenSubscription: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private storage: ReadWriteStorage) {
    this.tokenSubscription = activatedRoute.fragment.pipe(
      map(fragment => this.parseTokens(fragment)),
      tap(tokens => this.storeTokens(tokens)),
      map(tokens => JSON.stringify(tokens, null, 2))
    ).subscribe();
  }

  ngOnInit(): void {
    this.routeToGuardedPage();
  }

  ngOnDestroy(): void {
    this.tokenSubscription.unsubscribe();
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

  private routeToGuardedPage() {
    this.router.navigateByUrl('/guarded');
  }
}
