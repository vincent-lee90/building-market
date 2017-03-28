import { BuildingMarketPage } from './app.po';

describe('building-market App', function() {
  let page: BuildingMarketPage;

  beforeEach(() => {
    page = new BuildingMarketPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
