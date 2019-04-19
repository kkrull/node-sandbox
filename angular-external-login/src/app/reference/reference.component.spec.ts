import { async, TestBed } from '@angular/core/testing';

import { ReferenceComponent } from './reference.component';

describe('ReferenceComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReferenceComponent],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(ReferenceComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
