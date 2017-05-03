import { AngularSPAPage } from './app.po';

describe('angular-spa App', () => {
  let page: AngularSPAPage;

  beforeEach(() => {
    page = new AngularSPAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
