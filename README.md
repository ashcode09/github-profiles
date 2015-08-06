# GitHub Profiles

![screenshot of page](images/screenshot of page.png)

A responsive web application built to search GitHub profiles using the GitHub API.





## Specification

Use the GitHub API to search for any GitHub user by typing in their name, and the app will return a list of users whose name matches!





## Tech Used

*What I used...*

Built with AngularJS and tested in Jasmine and Protractor.






## The Many User Stories...

```
As a nosy GitHub user,
So that I can get started on searching for a user,
I would like to be able to type a search term into a search bar.

As a nosy GitHub user,
So that I can see all the people that use GitHub who also share my name,
I would like to be able to search my name and see all the users that share my name show up on the page.
```





## Local Installation

```
$ git clone https://github.com/ashleigh090990/github-profiles

$ cd github-profiles

$ npm install

$ bower install
```

This app is currently not working correctly when it is run locally (using webdriver-manager and http-server - although the Protractor tests all work?) and I am working on figuring out why that is. However, it works as it should when you open the index.html file:

```
$ open index.html
```






## Running the Tests

*Unit Tests*

```
$ ./node_modules/karma/bin/karma start test/karma.conf.js
```
Or if you have Karma installed locally, ```$ karma start test/karma.conf.js```.

*Feature Tests*

Update Selenium Webserver:

```
$ webdriver-manager update
```

```
$ webdriver-manager start
```

```
$ ./node_modules/protractor/bin/protractor test/e2e/conf.js
```
