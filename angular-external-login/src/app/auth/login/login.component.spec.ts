import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { empty } from 'rxjs/observable/empty';

import { NavigationService, LoginComponent } from './login.component';
import { OpenIdConnectService } from '../../shared/services/interfaces/openid-connect.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let openIdService: jasmine.SpyObj<OpenIdConnectService>;

  beforeEach(async(() => {
    openIdService = jasmine.createSpyObj('OpenIdConnectService', ['authorizationUrl']);
    openIdService.authorizationUrl.and.returnValue(empty());

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        { provide: NavigationService, useValue: jasmine.createSpyObj('NavigationService', ['changeLocationTo']) },
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
