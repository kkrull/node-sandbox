import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let subject: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('renders', () => {
    fixture = createApp();
    expect(appComponent()).toBeTruthy();
  });

  describe('.title', () => {
    it('is the name of the application', () => {
      fixture = createApp();
      subject = appComponent();
      expect(appComponent().title).toEqual('angular-15-phones');
    });
  });

  describe('content', () => {
    it('includes the name of the application', () => {
      fixture = createApp();
      fixture.detectChanges();

      const compiled = appElement();
      expect(compiled.querySelector('.content span')?.textContent).toContain(
        'angular-15-phones app is running!'
      );
    });
  });

  function appComponent(): AppComponent {
    return fixture.componentInstance;
  }

  function appElement(): HTMLElement {
    return fixture.nativeElement as HTMLElement;
  }

  function createApp(): ComponentFixture<AppComponent> {
    return TestBed.createComponent(AppComponent);
  }
});
