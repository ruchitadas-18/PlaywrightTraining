//Assignment --> Login into client side and fetch 1 element
const {test, expect}=require('@playwright/test')

test.only('Login into client dashboard',async({page}) =>{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    
    //storing the locators
    const email= page.locator('#userEmail');
    const password = page.locator("[type='password']");
    const signButton = page.locator("#login");
    const productName = page.locator(".card-body b")

    //enter the details and clicked
    await email.fill("gihiw10644@gxuzi.com");
    await password.fill("3hUh8rkg!8.Yxs$");
    await signButton.click();

    //after get all product api is called -> all the elements are visible
    //waiting for all the cards are successfully loaded 
    //await page.waitForLoadState('networkidle'); // it can be flasky
    //different approach
    await productName.first().waitFor(); // only wait for 1 element
    console.log(await productName.allTextContents());

    //fetching the first element
    //console.log(await productName.first().textContent());

}); 