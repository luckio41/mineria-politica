import { MineriaPoliticaPage } from './app.po';

describe('mineria-politica App', () => {
  let page: MineriaPoliticaPage;

  beforeEach(() => {
    page = new MineriaPoliticaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
