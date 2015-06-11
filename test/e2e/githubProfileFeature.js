describe('Github Profile Finder', function() {

	it('has a title function', function() {
		browser.get('http://localhost:8080');
		expect(browser.getTitle()).toEqual('GitHub User Search');
	});

});