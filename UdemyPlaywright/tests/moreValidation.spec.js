const {test,expect} = require('@playwright/test')

test('Popup Validation', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    /*await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");

    //to move back and forth within the tabs
    page.goBack();
    page.goForward();


    //Add popup validation logic here
    //await expect(page).toHaveURL("https://rahulshettyacademy.com/AutomationPractice/");

    */
   await expect(page.locator("#displayed-text")).toBeVisible();
   await page.locator("#hide-textbox").click();
   await expect(page.locator("#displayed-text")).toBeHidden();

})

test('Java Pop Up', async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    //listen when event like dialoge occur
    //to accept the java alerts
    await page.pause();
    page.on('dialog',dialog => dialog.accept());
    //to cancel the java alerts
    //page.on('dialog', dialog => dialog.dismiss());
    await page.locator("#confirmbtn").click();
    await page.locator("#mousehover").hover();

})

