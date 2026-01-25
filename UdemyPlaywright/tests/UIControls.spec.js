const {test, expect} = require('@playwright/test')

test('UI controls', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    
    //locators
    const userName = page.locator('#username');
    const password = page.locator('#password');
    const signIn = page.locator('#signInBtn');
    const dropdown = page.locator('select.form-control');
    const blinktext = page.locator("[href*='documents-request']");

    await userName.fill("rahulshettyacademy");
    await password.fill("Learning@830$3mK2");
    await page.locator(".radiotextsty").last().click();
    await page.locator('#okayBtn').click();

    //Assertion: to check radio button switch
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    //in the output it will check
    console.log(await page.locator(".radiotextsty").last().isChecked());

    await dropdown.selectOption("consult");
    //giving pause after selecting value
    //open a playwright inspect
    //await page.pause();

    //Checkboxes
    await page.locator("#terms").click();
    await expect(page.locator('#terms')).toBeChecked();
    await page.locator("#terms").uncheck();
    //returns false
    expect(await page.locator("#terms").isChecked()).toBeFalsy();

    //checking the blinking using attribute
    await expect(blinktext).toHaveAttribute("class","blinkingText");


});

test.only('Child windows handles',async({browser})=>{

    const incoginto = await browser.newContext();
    const page = await incoginto.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    
    //switching tabs
    const blinktext = page.locator("[href*='documents-request']");
     const userName = page.locator('#username');
    //listener will be invoked when there is another page is created in original context
    //need to open before new page is opened. because it do not listen after the page is done
    
    //FullFilled Promise
    const [newPage] = await Promise.all([ //Promise dot array -> //we want to next step to be proceed first complete these 2 steps
        incoginto.waitForEvent('page'),
    //make it wait  -> Promise : Pending -> Rejected -> Fullfilled
        blinktext.click(),
    ])
    //await newPage.waitForLoadState();
    const text = await newPage.locator(".red").textContent();
    //textContent -> grab the values only when it is attach to dom
    //inputValue -> will grab the user response
    console.log(userName.inputValue());
    console.log(text);
    //fetching email
    //work only on string and not ob locator
    const arrayText = text.split("@")
    const domain = arrayText[1].split(" ")[0]
    console.log(domain);

    //return to parent value
    await userName.fill(domain);
    await page.pause();
    //await signIn.click();
});