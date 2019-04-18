import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TokenStorageService } from '../../shared/services/identity-provider-plugin-interfaces';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(private storage: TokenStorageService, private router: Router) { }

  ngOnInit() {
    this.removeStoredTokens();
    this.routeToHomePage();
  }

  private removeStoredTokens() {
    this.storage.removeAllTokens();
  }

  private routeToHomePage() {
    this.router.navigateByUrl('/');
  }
}
