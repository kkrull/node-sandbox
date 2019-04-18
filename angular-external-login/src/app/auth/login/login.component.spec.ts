import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { empty } from 'rxjs/observable/empty';

import { LoginComponent } from './login.component';
import { OpenIdConnectService } from '../../shared/services/interfaces/openid-connect.service';
import { NavigationService } from '../window-navigation.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let openIdService: jasmine.SpyObj<OpenIdConnectService>;
  let navigationService: jasmine.SpyObj<NavigationService>;

  beforeEach(async(() => {
    navigationService = jasmine.createSpyObj('NavigationService', ['changeLocationTo', 'currentUrl']);
    navigationService.currentUrl.and.returnValue(new URL('http://localhost:4200/auth/login'));

    openIdService = jasmine.createSpyObj('OpenIdConnectService', ['authorizationUrl']);
    openIdService.authorizationUrl.and.returnValue(empty());

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        { provide: NavigationService, useValue: navigationService },
        { provide: OpenIdConnectService, useValue: openIdService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
