const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../Pages/login.page');
const ProductListPage = require('../Pages/productList.page');
const ProductDetailPage = require('../Pages/producDetail.page');  
const comparePage = require('../Pages/comparePage.page');
const { expect } = require('@playwright/test');   
const config = require('../config');
const data = require('../testData');
let addToComparePage;
let productDetailsPage;
let productListPage;
let loginPage;

Given('I am on the homepage', async function () {
    // Write code here that turns the phrase above into concrete actions
    loginPage = new LoginPage(this.page);
    await this.page.goto(`${config.baseUrl}/login`);
    await loginPage.credentials(data.user.email, data.user.password);
    await loginPage.clickLoginButton();
});

When('I navigate to category {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    productListPage = new ProductListPage(this.page);
    await productListPage.clickOnCategory(string);
});

When('I add the first product to the comparison list {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    productListPage.clickOnProduct(string);
});

Then('Click on add to compare button for the first product', async function () {    
           // Write code here that turns the phrase above into concrete actions
    productDetailsPage = new ProductDetailPage(this.page);
    await productDetailsPage.clickAddToCompareList();
});

Then('I add the second product to the comparison list {string}', async function (string) {
        // Write code here that turns the phrase above into concrete actions
    await productListPage.clickOnCategory('Apparel & Shoes');
    await productListPage.clickOnProduct(string);
});

Then('Click on add to compare button for the second product', async function () {    
    // Write code here that turns the phrase above into concrete actions
    await productDetailsPage.clickAddToCompareList();
});

Then('I should see both products listed for comparison', async function () {
    // Write code here that turns the phrase above into concrete actions
    await expect(this.page).toHaveURL(`${config.baseUrl}/compareproducts`);
});

Then('I should see the specifications of both products side by side', async function () {
    // Write code here that turns the phrase above into concrete actions
    addToComparePage= new comparePage(this.page);
    await addToComparePage.verifyProductName();
    
});

Then('select the cheaper product for purchase', async function () {
    // Write code here that turns the phrase above into concrete actions
    await addToComparePage.selectCheaperProduct();
});