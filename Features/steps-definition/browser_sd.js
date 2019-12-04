
const expect = require('chai').expect;
const {Given, When, Then} = require('cucumber');
require('chromedriver');

var webdriver = require('selenium-webdriver');
const {Builder, By, Key, until} = require('selenium-webdriver');
var driver = new webdriver.Builder()
.forBrowser('chrome')
.build();

Given (/^I navigate to "(.+)"$/i, function (siteUrl) {
    return driver.get(siteUrl);
});

When (/^I search for "(.+)"$/i, function (searched) {  
    // return driver.findElement(selector).sendKeys(searchQuery, selenium.Key.ENTER);   
    return driver.findElement(By.name('q')).sendKeys(searched, Key.RETURN);
});

Then (/^I should see some results$/i, function () {
    return driver.findElements(By.xpath("//div[@class='srg']//div[@class='g']")).then(elements =>  expect(elements.length).to.be.equal(10));
});

Then (/^I close the browser$/i,  function () {
    return driver.quit();
});