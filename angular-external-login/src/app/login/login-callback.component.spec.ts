import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ReadWriteStorage } from '../shared/services/storage/read-write-storage.service';

import { LoginCallbackComponent } from './login-callback.component';

@Component({
  selector: 'app-stub-component',
  template: ''
})
class StubComponent {}

describe('LoginCallbackComponent', () => {
  let component: LoginCallbackComponent;
  let fixture: ComponentFixture<LoginCallbackComponent>;
  let storage: jasmine.SpyObj<ReadWriteStorage>;

  beforeEach(async(() => {
    storage = jasmine.createSpyObj('ReadWriteStorage', ['getItem', 'setItem']);
    TestBed.configureTestingModule({
      declarations: [
        LoginCallbackComponent,
        StubComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'guarded', component: StubComponent }
        ])
      ],
      providers: [
        { provide: ReadWriteStorage, useValue: storage }
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
