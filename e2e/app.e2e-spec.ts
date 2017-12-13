import { Opdracht2Page } from './app.po';

describe('opdracht2 App', () => {
  let page: Opdracht2Page;

  beforeEach(() => {
    page = new Opdracht2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
