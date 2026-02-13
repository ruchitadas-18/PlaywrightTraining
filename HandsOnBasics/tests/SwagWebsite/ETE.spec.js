import { test, expect } from '@playwright/test';
const {login} = require('./login.js')
const {AddItemFixture} = require('./AddItemFixture.js')
let productName;

test('End-to-End Purchase Flow', async ({ page }) =>{
    await login(page);

    //verify the productlist
    await expect(page).toHaveURL(/\/inventory\.html$/);

    //adding the product
    productName = 'Sauce Labs Bike Light'
    const addProduct = new AddItemFixture(page);
    await addProduct.addToCart(productName);
    await addProduct.expectCartCount('1');
    //Go to cart
    await page.click('.shopping_cart_link');
    await expect(page.locator('.cart_item')).toHaveCount(1);

  //Checkout
    await page.click('[data-test="checkout"]');

    await page.fill('[data-test="firstName"]', 'John');
    await page.fill('[data-test="lastName"]', 'Doe');
    await page.fill('[data-test="postalCode"]', '12345');

    await page.click('[data-test="continue"]');

    // Verify overview page
    await expect(page).toHaveURL(/checkout-step-two/);

    //Finish
    await page.locator('[data-test="finish"]').click();

    //Verify confirmation
    await expect(page.locator('.complete-header'))
        .toHaveText('Thank you for your order!');
});
