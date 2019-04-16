import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadWriteStorage } from '../shared/services/storage/read-write-storage.service';

import { GuardedComponent } from './guarded.component';

describe('GuardedComponent', () => {
  let component: GuardedComponent;
  let fixture: ComponentFixture<GuardedComponent>;
  let storage: jasmine.SpyObj<ReadWriteStorage>;

  beforeEach(async(() => {
    storage = jasmine.createSpyObj('ReadWriteStorage', ['getItem', 'setItem']);
    TestBed.configureTestingModule({
      declarations: [GuardedComponent],
      providers: [
        { provide: ReadWriteStorage, useValue: storage }
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
