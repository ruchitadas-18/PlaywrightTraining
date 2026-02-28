const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LoginPage = require('../Pages/login.page');
const config = require('../config');
let loginPage;

Given('I am on the login page', async function () {
  loginPage = new LoginPage(this.page);
  await this.page.goto(`${config.baseUrl}/login`);
});

When('I enter valid credentials {string} and {string}', async function (email, password) {
    await loginPage.credentials(email, password);
    await loginPage.clickLoginButton();

});

Then('I should be redirected to the dashboard', async function () {
    const value = await loginPage.verifyLogin();
    await expect(value).toHaveText("Welcome to our store");
});