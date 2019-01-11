import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  readTitle() {
    return element(by.css('.app--title')).getText();
  }
}
