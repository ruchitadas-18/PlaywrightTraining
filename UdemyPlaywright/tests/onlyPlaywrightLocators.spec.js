const { test, expect } = require('@playwright/test');

test('special locator', async ({ page }) => {
    // Navigate to a URL
    await page.goto('https://rahulshettyacademy.com/angularpractice/');

    // extracting text with label --> stable only selection
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    //use for checking check boxes
    await page.getByLabel("Student").check();
    await page.getByLabel("Gender").selectOption("Female");

    //Extract using placeholder
    await page.getByPlaceholder("Password").fill("avbhewer234");
    //for button
    await page.getByRole("button",{name: 'Submit'}).click();

    //from text
    await page.getByText("Success").isVisible();

    //link
    await page.getByRole("link",{name: 'Shop'}).click();

    //filtering based on name
    await page.locator("app-card").filter({hasText: 'Blackberry'}).getByRole("button").click();

    //if getByLabel -> works for edit box inside in label as well as linkage like same id
    





});

