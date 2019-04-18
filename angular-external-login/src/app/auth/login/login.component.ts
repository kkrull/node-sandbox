import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { OpenIdConnectService } from '../../shared/services/interfaces/openid-connect.service';
import { NavigationService } from '../window-navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private identityProviderService: OpenIdConnectService,
              private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.authorizationUrlSnapshot()
      .subscribe(url => this.navigationService.changeLocationTo(url));
  }

  private authorizationUrlSnapshot() {
    const loginComponentUrl = window.location.href;
    console.log('url to /auth/login', loginComponentUrl);

    const callbackHref = loginComponentUrl.replace(/[/]auth[/]login.*$/, '/auth/callback');
    console.log('url to /auth/callback', callbackHref);

    const callbackUrl = new URL(callbackHref);
    return this.identityProviderService.authorizationUrl(callbackUrl)
      .pipe(take(1));
  }
}
