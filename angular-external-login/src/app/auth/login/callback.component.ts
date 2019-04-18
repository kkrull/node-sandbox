import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';

import { TokenStorageService } from '../../shared/services/interfaces/token-storage.service';

interface Tokens {
  accessToken: string;
  expiresIn: string;
  idToken: string;
  type: string;
}

@Component({
  selector: 'app-login-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit, OnDestroy {
  private tokenSubscription: Subscription;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private storage: TokenStorageService) {

    this.tokenSubscription = activatedRoute.fragment.pipe(
      map(fragment => this.parseTokens(fragment)),
      tap(tokens => this.storeTokens(tokens))
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
    this.storage.saveAccessToken(tokens.accessToken);
    this.storage.saveIdentityToken(tokens.idToken);
  }

  private routeToGuardedPage() {
    this.router.navigateByUrl('/guarded');
  }
}
