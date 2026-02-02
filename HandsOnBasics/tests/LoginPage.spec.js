const {test,exoect, expect} = require('@playwright/test')

test('Login Page', async({page}) => {
    await page.goto("https://practice.expandtesting.com/login");

    //fetching the login details
    const userName = await page.locator('b').filter({ hasText: 'practice' }).first().textContent();
    const password = await page.locator('b').filter({ hasText: 'SuperSecretPassword!' }).last().textContent();

    //entering the details
    await page.getByLabel('Username').fill(userName);
    await page.getByLabel('Password').fill(password);

    //clicking
    await page.getByRole("button",{name: 'Login'}).click();

    //fetching from alert
    await expect(page.locator('b:visible')).toHaveText("You logged into a secure area!");
    page.on('dialog', dialog => dialog.dismiss());

    console.log(await page.getByRole("heading",{name:"Welcome to the Secure Area. When you are done click logout below."}).textContent());
})