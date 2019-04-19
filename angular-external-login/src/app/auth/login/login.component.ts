import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { take } from 'rxjs/operators';

import { OpenIdConnectService } from '../../shared/services/identity-provider-plugin-interfaces';
import { NavigationService } from '../services/window-navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private identityProviderService: OpenIdConnectService,
              private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.authorizationUrlSnapshot(this.callbackUrl())
      .subscribe(url => this.navigationService.changeLocationTo(url));
  }

  private callbackUrl(): URL {
    const currentHref = this.navigationService.currentUrl().href;
    const routeToThisComponentIncludingQuery = /[/]auth[/]login.*$/;
    const routeToCallback = '/auth/callback';
    return new URL(currentHref.replace(routeToThisComponentIncludingQuery, routeToCallback));
  }

  private authorizationUrlSnapshot(callbackUrl: URL): Observable<URL> {
    return this.identityProviderService.authorizationUrl(callbackUrl)
      .pipe(take(1));
  }
}
