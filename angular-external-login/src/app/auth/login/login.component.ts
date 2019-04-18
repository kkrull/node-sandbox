import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { OpenIdConnectService } from '../../shared/services/interfaces/openid-connect.service';

export abstract class NavigationService {
  abstract changeLocationTo(url: URL): void;
}

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
    return this.identityProviderService.authorizationUrl()
      .pipe(take(1));
  }
}
