import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CallbackUrlTokenParser, Tokens, TokenStorageService } from '../../shared/services/identity-provider-plugin-interfaces';

@Component({
  selector: 'app-login-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private tokenParser: CallbackUrlTokenParser,
              private storage: TokenStorageService) { }

  ngOnInit(): void {
    const tokens = this.tokenParser.parseTokens(this.activatedRoute.snapshot);
    this.storeTokens(tokens);
    this.routeToGuardedPage();
  }

  private storeTokens(tokens: Tokens) {
    this.storage.saveAccessToken(tokens.accessToken);
    this.storage.saveIdentityToken(tokens.idToken);
  }

  private routeToGuardedPage() {
    this.router.navigateByUrl('/guarded');
  }
}
