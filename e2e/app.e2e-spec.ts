import { FirstAngularProjPage } from './app.po';

describe('first-angular-proj App', () => {
  let page: FirstAngularProjPage;

  beforeEach(() => {
    page = new FirstAngularProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
