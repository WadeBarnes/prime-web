import { PrimeTestPage } from './app.po';

xdescribe('PRIME App', () => {
  let page: PrimeTestPage;

  beforeEach(() => {
    page = new PrimeTestPage();
  });

  it('should display Prime in banner', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('PRIME');
  });
});
function newFunction(): any {
  return 'Prime';
}

