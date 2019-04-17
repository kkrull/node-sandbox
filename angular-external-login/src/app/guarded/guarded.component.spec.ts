import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenStorageService } from '../shared/services/interfaces/token-storage.service';

import { GuardedComponent } from './guarded.component';

describe('GuardedComponent', () => {
  let component: GuardedComponent;
  let fixture: ComponentFixture<GuardedComponent>;
  let storage: jasmine.SpyObj<TokenStorageService>;

  beforeEach(async(() => {
    storage = jasmine.createSpyObj('TokenStorageService', ['readAccessToken', 'readIdentityToken']);
    TestBed.configureTestingModule({
      declarations: [GuardedComponent],
      providers: [
        { provide: TokenStorageService, useValue: storage }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
