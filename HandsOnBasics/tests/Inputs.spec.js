const {test,expect} = require("@playwright/test")

//Inputs in ExapandTesting
test('Postive Scenario', async({page})=>{
    await page.goto("https://practice.expandtesting.com/inputs");

    //Locators and Entering Values
    const num1 = "2345901";
    await page.locator("#input-number").fill("2345901");
    await page.locator("#input-text").fill("Numbers");
    await page.locator("#input-password").fill("Password#24");

    //Adding Calender Dates
    const monthNumber = "12";
    const date = "22";
    const year = "2034";

    //await page.locator("#input-date").click();
    //how to access the calender locators when its not visble in calender
    await page.getByRole('textbox', { name: 'Input: Date' }).fill('2026-03-19');
    

    //Output
    await page.getByRole('button', {name: 'Display Inputs'}).click();
    await page.pause();
    //checking the output
    const num = await page.locator("#output-number").textContent();
    console.log(num == num1);

    //clear
    await page.getByRole("button",{name:'Clear Inputs'}).click();
})