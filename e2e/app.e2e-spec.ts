import { NgBootstrapReusablesPage } from './app.po';

describe('ng-bootstrap-reusables App', () => {
  let page: NgBootstrapReusablesPage;

  beforeEach(() => {
    page = new NgBootstrapReusablesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
