import { AgendaPage } from './app.po';

describe('agenda App', () => {
  let page: AgendaPage;

  beforeEach(() => {
    page = new AgendaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
