import { Component, OnInit } from '@angular/core';
import { tap, take } from 'rxjs/operators';

import { OpenIdConnectService } from '../../shared/services/interfaces/openid-connect.service';

export abstract class LocationService {
  abstract changeLocationTo(url: URL): void;
}

export class WindowLocationService extends LocationService {
  changeLocationTo(url: URL): void {
    window.location.href = url.href;
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private identityProviderService: OpenIdConnectService,
              private locationService: LocationService) { }

  ngOnInit(): void {
    this.identityProviderService.authorizationUrl().pipe(
      // take(1),
      tap(targetUrl => this.locationService.changeLocationTo(targetUrl))
    ).subscribe();
  }
}
