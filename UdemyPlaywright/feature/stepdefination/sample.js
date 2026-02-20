const { Given, When, Then} = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const testData = require('../../Utils/PlaceOrder.json');


Given('the user login with valid credentials', async function () {

  const loginPage = this.poManager.getLoginPage();
  await loginPage.goto();
  await loginPage.validLogin(testData.email, testData.password);

});

When('the user searches and adds product to cart', async function () {

  this.dashboard = this.poManager.getDashboard();

  await this.dashboard.searchProduct(testData.productName);
  this.dashboard.navigateToCart();

  await this.page.locator("div li").first().waitFor();
  await expect(
    this.page.locator("h5", { hasText: testData.productName })
  ).toBeVisible();

  await this.page.locator("text=Checkout").click();

});

When('proceeds to checkout and submits the order', async function () {

  await this.page.locator("[value*='4542']").fill("1234567890");

  await this.page.locator("select.input.ddl").first().selectOption("11");
  await this.page.locator("select.input.ddl").last().selectOption("21");

  await this.page.locator('input[type="text"]').nth(1).fill("123");
  await this.page.locator('input[type="text"]').nth(2).fill("New Born");

  await expect(
    this.page.locator(".user__name [type='text']").first()
  ).toHaveText(testData.email);

  await this.page
    .locator("[placeholder*='Country']")
    .pressSequentially("ind", { delay: 150 });

  const dropdown = this.page.locator(".ta-results");
  await dropdown.waitFor();

  const optionCount = await dropdown.locator("button").count();

  for (let i = 0; i < optionCount; ++i) {
    const text = await dropdown.locator("button").nth(i).textContent();
    if (text.trim() === "India") {
      await dropdown.locator("button").nth(i).click();
      break;
    }
  }

  await this.page.locator(".action__submit").click();

  await expect(
    this.page.locator(".hero-primary")
  ).toHaveText(" Thankyou for the order. ");

  this.orderId = await this.page
    .locator(".em-spacer-1 .ng-star-inserted")
    .textContent();

});

Then('the order should be placed successfully', async function () {
  expect(this.orderId).toBeTruthy();
});

Then('the order should appear in order history', async function () {

  await this.page.locator("button[routerlink*='myorders']").click();
  await this.page.locator("tbody").waitFor();

  const rows = this.page.locator("tbody tr");

  for (let i = 0; i < await rows.count(); ++i) {
    const rowOrderId = await rows.nth(i).locator("th").textContent();
    if (this.orderId.includes(rowOrderId)) {
      await rows.nth(i).locator("button").first().click();
      break;
    }
  }

  const orderIdDetails = await this.page.locator(".col-text").textContent();
  expect(this.orderId.includes(orderIdDetails)).toBeTruthy();

});