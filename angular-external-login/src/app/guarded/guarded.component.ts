import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';

import { TokenStorageService } from '../shared/services/interfaces/token-storage.service';

@Component({
  selector: 'app-guarded',
  templateUrl: './guarded.component.html',
  styleUrls: ['./guarded.component.css']
})
export class GuardedComponent implements OnInit {
  private accessTokenSubject$: Subject<string>;
  private idTokenSubject$: Subject<string>;

  accessToken$: Observable<string>;
  idToken$: Observable<string>;

  constructor(private storage: TokenStorageService) {
    this.accessTokenSubject$ = new ReplaySubject();
    this.accessToken$ = this.accessTokenSubject$.asObservable();

    this.idTokenSubject$ = new ReplaySubject();
    this.idToken$ = this.idTokenSubject$.asObservable();
  }

  ngOnInit(): void {
    this.accessTokenSubject$.next(this.storage.readAccessToken());
    this.idTokenSubject$.next(this.storage.readIdentityToken());
  }
}
