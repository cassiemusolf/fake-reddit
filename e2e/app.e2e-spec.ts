import { FakeRedditPage } from './app.po';

describe('fake-reddit App', function() {
  let page: FakeRedditPage;

  beforeEach(() => {
    page = new FakeRedditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
