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
    //await page.pause();
    page.on('dialog',dialog => dialog.accept());
    //to cancel the java alerts
    //page.on('dialog', dialog => dialog.dismiss());
    await page.locator("#confirmbtn").click();
    await page.locator("#mousehover").hover();

})

test('Screenshot', async({page}) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator("#displayed-text")).toBeVisible();
    //screenshot on element
    await page.locator("#displayed-text").screenshot({path:'Partialscreenshot.png'});
    await page.locator("#hide-textbox").click();
    //screenshot
    await page.screenshot({path: 'screenshot.png'});
    await expect(page.locator("#displayed-text")).toBeHidden();

})

  //compare the screenshot with previous day
    
test.only("Visual", async({page}) =>{
    await page.goto("https://www.flightaware.com");
    expect(await page.screenshot()).toMatchSnapshot('screenshot1.png');
})
