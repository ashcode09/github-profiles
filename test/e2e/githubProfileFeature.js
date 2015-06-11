describe('Github Profile Finder', function() {

	var inputBox = element(by.model('searchCtrl.searchTerm'));
	var searchButton = element(by.className('btn'))

	beforeEach(function() {
		browser.get('http://localhost:8080');
	});

	it('has a title function', function() {
		expect(browser.getTitle()).toEqual('GitHub User Search');
	});

	it('finds profiles', function() {
		inputBox.sendKeys('ashleigh090990');
		searchButton.click();
		var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
		expect(profiles.get(0).getText()).toEqual('ashleigh090990');
	});

});