import { Ng2VisDemoPage } from './app.po';

describe('ng2-vis-demo App', function() {
  let page: Ng2VisDemoPage;

  beforeEach(() => {
    page = new Ng2VisDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
