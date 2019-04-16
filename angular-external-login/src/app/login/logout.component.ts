import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ReadWriteStorage } from '../shared/services/storage/read-write-storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(private router: Router, private storage: ReadWriteStorage) { }

  ngOnInit() {
    this.storage.removeItem('CognitoAccessToken');
    this.storage.removeItem('CognitoIdToken');

    this.router.navigateByUrl('/');
  }
}
