import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TokenStorageService } from '../shared/services/interfaces/token-storage.service';

import { LoginCallbackComponent } from './login-callback.component';

@Component({
  selector: 'app-stub-component',
  template: ''
})
class StubComponent {}

describe('LoginCallbackComponent', () => {
  let component: LoginCallbackComponent;
  let fixture: ComponentFixture<LoginCallbackComponent>;
  let storage: jasmine.SpyObj<TokenStorageService>;

  beforeEach(async(() => {
    storage = jasmine.createSpyObj('TokenStorageService', ['saveAccessToken', 'saveIdentityToken']);
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'guarded', component: StubComponent }
        ])
      ],
      declarations: [
        LoginCallbackComponent,
        StubComponent
      ],
      providers: [
        { provide: TokenStorageService, useValue: storage }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
