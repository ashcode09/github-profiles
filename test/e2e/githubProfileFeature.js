describe('Github Profile Finder', function() {

	it('has a title function', function() {
		browser.get('http://localhost:8080');
		expect(browser.getTitle()).toEqual('GitHub User Search');
	});

});

describe('Github profile finder', function() {

	it('finds profiles', function() {
		browser.get('http://localhost:8080');
		element(by.model('searchCtrl.searchTerm')).sendKeys('ashleigh090990');
		element(by.className('btn')).click();
		expect(element(by.binding('user.login')).getText()).toEqual('ashleigh090990');
	});

});