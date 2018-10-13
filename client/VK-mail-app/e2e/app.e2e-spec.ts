import { VKMailAppPage } from './app.po';

describe('vk-mail-app App', function() {
  let page: VKMailAppPage;

  beforeEach(() => {
    page = new VKMailAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
