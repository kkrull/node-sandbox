import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TokenStorageService } from '../shared/services/interfaces/token-storage.service';

import { LogoutComponent } from './logout.component';

@Component({
  selector: 'app-stub-component',
  template: ''
})
class StubComponent {}

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;
  let storage: jasmine.SpyObj<TokenStorageService>;

  beforeEach(async(() => {
    storage = jasmine.createSpyObj('TokenStorageService', ['removeAllTokens']);
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: StubComponent }
        ])
      ],
      declarations: [
        LogoutComponent,
        StubComponent
      ],
      providers: [
        { provide: TokenStorageService, useValue: storage }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
