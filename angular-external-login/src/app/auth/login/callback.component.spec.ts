import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CallbackUrlTokenParser, Tokens, TokenStorageService } from '../../shared/services/identity-provider-plugin-interfaces';

import { CallbackComponent } from './callback.component';

@Component({
  selector: 'app-stub-component',
  template: ''
})
class StubComponent {}

function anyTokens(): Tokens {
  return {
    accessToken: 'access_token',
    expiresIn: '3600',
    idToken: 'id_token',
    type: 'Bearer'
  };
}

describe('CallbackComponent', () => {
  let component: CallbackComponent;
  let fixture: ComponentFixture<CallbackComponent>;
  let parser: jasmine.SpyObj<CallbackUrlTokenParser>;
  let storage: jasmine.SpyObj<TokenStorageService>;

  beforeEach(async(() => {
    parser = jasmine.createSpyObj('CallbackUrlTokenParser', ['parseTokens']);
    parser.parseTokens.and.returnValue(anyTokens());

    storage = jasmine.createSpyObj('TokenStorageService', ['saveAccessToken', 'saveIdentityToken']);
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'guarded', component: StubComponent }
        ])
      ],
      declarations: [
        CallbackComponent,
        StubComponent
      ],
      providers: [
        { provide: CallbackUrlTokenParser, useValue: parser },
        { provide: TokenStorageService, useValue: storage }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
