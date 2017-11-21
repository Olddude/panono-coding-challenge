import { browser, by, element } from 'protractor';
import * as webdriver from 'selenium-webdriver';
import Promise = webdriver.promise.Promise;

export class AppPage {
  navigateTo(): Promise<any> | any {
    return browser.get('/');
  }

  isGridDisplayed(): Promise<boolean> | boolean {
    return element(by.name('grid')).isDisplayed();
  }
}
