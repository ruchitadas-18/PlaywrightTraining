const playwright = require('@playwright/test');
const { chromium } = require('@playwright/test');
const PoManager = require('../../PageObject/PoManager');
const{Before, After, setDefaultTimeout} = require('@cucumber/cucumber');
//setDefaultTimeout(60*1000); //overwriting the default timeout of 30 seconds to 40 seconds

let browser;
Before(async function () {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  this.page = await context.newPage();
  this.poManager = new PoManager(this.page);
});

After(async function () {
  await browser.close();
});