import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HeroesComponent', () => {
  let fixture: ComponentFixture<HeroesComponent>;
  beforeEach(() => {
    return TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      imports: [FormsModule]
    }).compileComponents();
  });

  describe('.hero', () => {
    it('initializes to Windstorm', () => {
      fixture = TestBed.createComponent(HeroesComponent);
      fixture.detectChanges();
      expect(fixture.componentInstance.hero).toEqual(new Hero(1, 'Windstorm'));
    });
  });

  describe('when rendered', () => {
    beforeEach(async(() => {
      fixture = TestBed.createComponent(HeroesComponent);
      fixture.componentInstance.hero = new Hero(42, 'Oracle');
      fixture.detectChanges();
    }));

    it('renders a header with the hero\'s name in uppercase', () => {
      const nameElement = queryByCss(fixture, '.hero--header');
      expect(nameElement.nativeElement.textContent).toEqual('ORACLE Details');
    });

    it('renders the hero\'s ID', () => {
      const idElement = queryByCss(fixture, '.hero--id');
      expect(idElement.nativeElement.textContent).toEqual('id: 42');
    });

    it('renders the hero\'s name', () => {
      const nameElement = queryByCss(fixture, '.hero--name');
      expect(nameElement.nativeElement.value).toEqual('Oracle');
    });

    it('updating the name input updates HeroesComponent.hero', () => {
      const nameElement: HTMLInputElement = queryByCss(fixture, '.hero--name').nativeElement;
      nameElement.value = 'Marvin the Martian';
      nameElement.dispatchEvent(new Event('input'));
      expect(fixture.componentInstance.hero.name).toEqual('Marvin the Martian');
    });
  });
});

function queryByCss(fixture: ComponentFixture<HeroesComponent>, cssSelector: string): DebugElement {
  return fixture.debugElement.query(By.css(cssSelector));
}
