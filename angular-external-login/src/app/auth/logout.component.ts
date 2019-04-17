import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TokenStorageService } from '../shared/services/interfaces/token-storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(private router: Router, private storage: TokenStorageService) { }

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
