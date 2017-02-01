import { PromiseMakerPage } from './app.po';

describe('promise-maker App', function() {
  let page: PromiseMakerPage;

  beforeEach(() => {
    page = new PromiseMakerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
