import { AppPage } from './app.po';

describe('Main page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display a title', () => {
    page.navigateTo();
    expect(page.readTitle()).toEqual('Tour of Heroes');
  });
});
