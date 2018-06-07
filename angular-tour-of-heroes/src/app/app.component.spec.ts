import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from "@angular/core";
import { By } from "@angular/platform-browser";

@Component({ selector: 'app-heroes', template: '<div id="heroes-component"></div>' })
class HeroesComponentStub {}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeroesComponentStub
      ],
    }).compileComponents();
  }));

  describe('.title', () => {
    it('the property value is "Tour of Heroes"', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('Tour of Heroes');
    });

    it('renders in the header element', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const headerElement = fixture.nativeElement.querySelector('h1');
      expect(headerElement.textContent).toEqual('Tour of Heroes');
    });
  });

  it('renders a HeroesComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.directive(HeroesComponentStub))).not.toBeNull('HeroesComponent');
  });
});
