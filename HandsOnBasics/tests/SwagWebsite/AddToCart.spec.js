const {test,expect} = require('@playwright/test')
const {login} = require('./login.js')
const {AddItemFixture} = require('./AddItemFixture.js')
let productName;

//TC-1 Add Single Product to Cart
test('Add Product from List', async({page})=>{
    productName = 'Sauce Labs Backpack';
    await login(page);
    
    const addProduct = new AddItemFixture(page);
    await addProduct.addToCart(productName);
    // // wait until add succeeded
    //     await expect(
    //        addProduct.addToCart(productName).getByRole('button', { name: 'Remove' })
    //     ).toBeVisible();
    // await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').waitFor({state:"visible"});
    // await expect(page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')).toBeEnabled();
    // await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click({ force: true });
    // await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').evaluate(el => el.click());

    addProduct.expectCartCount('1');
})

//TC-2 Add Different products to Cart
test('Add from product detail page', async({page}) =>{
    await login(page);
    const addProduct = new AddItemFixture(page);
    productName = 'Sauce Labs Bike Light'
    await page.getByText('Sauce Labs Backpack').click();
    await page.locator('#add-to-cart').click();
    await addProduct.expectCartCount('1');
    await page.getByRole('button',{name:'Back to products'}).click();
    await expect(page.locator('.title')).toHaveText('Products');

})

//TC-4 Remove product from cart
test('Remove the product', async({page})=>{
    await login(page);
    const addProduct = new AddItemFixture(page);
    productName = 'Sauce Labs Bike Light'
    await addProduct.addToCart(productName);
    await addProduct.expectCartCount('1');
    await page
            .locator('.inventory_item')
            .filter({ hasText: productName })
            .getByRole('button', { name: 'Remove' })
            .click();
    await addProduct.expectCartCount('0');
})

//TC-5 Cart retain after logout
test('Retain the Cart details', async({page})=>{
    await login(page);
    const addProduct = new AddItemFixture(page);
    productName = 'Sauce Labs Bike Light'
    await addProduct.addToCart(productName);
    await addProduct.expectCartCount('1');
        // Logout
    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');
        // Login again
    await login(page);

    addProduct.expectCartCount('1');
})