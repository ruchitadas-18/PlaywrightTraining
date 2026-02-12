const { test, expect } = require("@playwright/test")
const {login} = require('../SwagWebsite/login.js')

//TC-1 Verify Products Page Loads with Product List 
test('Product List', async({page})=>{
    await login(page);

    //assertion to check the home page
    //ToHaveUrl treats quoted value as strings
    await expect(page).toHaveURL(/\/inventory\.html$/);

    //assertion with title
    await expect(page.locator('.title')).toHaveText('Products');

})

//TC-2  Verify Add to Cart from Product List Page
test.only('Add to Cart',async({page})=>{
    await login(page);
    await page.getByRole('button',{name:'Add to cart'}).first().click();

    //verify weather the button is changed or not
    await expect(page.locator('#remove-sauce-labs-backpack')).toHaveText('Remove');

    //checking if added to the cart
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');


}) 

//TC-3 Verify Product Sorting by Price (Low to High) 
test('Comparing Price', async({page}) =>{
    await login(page);
    const dropdown = page.locator('select.product_sort_container');
    await dropdown.selectOption('lohi');

    const PriceList = await page.locator('.pricebar').allInnerTexts();
    console.log(PriceList);

    const price = PriceList.map(p => parseInt(p.replace('$','')));

    for(let i=0; i<price.length-1; i++){
        expect(price[i]).toBeLessThanOrEqual(price[i+1]);
    }


})
