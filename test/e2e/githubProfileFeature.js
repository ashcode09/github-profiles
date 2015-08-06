describe('Github Profile Finder', function() {

  var inputBox = element(by.model('searchCtrl.searchTerm'));
  var searchButton = element(by.className('btn'))
  var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title function', function() {
    expect(browser.getTitle()).toEqual('GitHub User Search');
  });

  it('finds profiles', function() {
    inputBox.sendKeys('ashleigh');
    searchButton.click();
    expect(profiles.get(0).getText()).toEqual('lashleigh');
  });

  it('finds the last Ashleigh', function() {
    inputBox.sendKeys('ashleigh');
    searchButton.click();
    expect(profiles.last().getText()).toEqual('Lookyounger');
  });

});