import { browser, by, element } from 'protractor';

export class MineriaPoliticaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
