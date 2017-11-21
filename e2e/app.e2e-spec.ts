import { AppPage } from './app.po';

describe('panono-coding-challange App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display grid as default container', () => {
    page.navigateTo()
      .then(() => expect(page.isGridDisplayed()).toBeTruthy());
  });
});
