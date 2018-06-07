import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from "@angular/core";
import { By } from "@angular/platform-browser";

@Component({ selector: 'app-heroes', template: '' })
class HeroesComponentStub {}

describe('AppComponent', () => {
  let app: ComponentFixture<AppComponent>;

  beforeEach(() => {
    return TestBed.configureTestingModule({
      declarations: [AppComponent, HeroesComponentStub],
    }).compileComponents()
      .then(() => { app = TestBed.createComponent(AppComponent); });
  });

  describe('.title', () => {
    it('the property value is "Tour of Heroes"', () => {
      expect(app.componentInstance.title).toEqual('Tour of Heroes');
    });

    it('renders with the "app--title" class', () => {
      app.detectChanges();
      const headerElement = app.debugElement.query(By.css('.app--title'));
      expect(headerElement.nativeElement.textContent).toEqual('Tour of Heroes');
    });
  });

  it('renders a HeroesComponent', () => {
    app.detectChanges();
    const heroesComponent = app.debugElement.query(By.directive(HeroesComponentStub));
    expect(heroesComponent).not.toBeNull('HeroesComponent');
  });
});
