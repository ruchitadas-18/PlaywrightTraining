//Assignment --> Login into client side and fetch 1 element
const {test, expect}=require('@playwright/test');
const { hash } = require('crypto');

test.only('Login into client dashboard',async({page}) =>{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    
    //storing the locators
    const emailName = "gihiw10644@gxuzi.com";
    const email= page.getByPlaceholder('email@example.com');
    const password = page.getByPlaceholder("enter your passsword");
    const signButton = page.getByRole("button", {name:'Login'});
    const productName = page.locator(".card-body")

    //enter the details and clicked
    await email.fill(emailName);
    await password.fill("3hUh8rkg!8.Yxs$");
    await signButton.click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   
   await productName.filter({hasText:"ZARA COAT 3"})
   .getByRole("button",{name:"Add to Cart"}).click();
 
   await page.getByRole("listitem").getByRole('button',{name:"Cart"}).click();
 
   //await page.pause();
   await page.locator("div li").first().waitFor();
   await expect(page.getByText("ZARA COAT 3")).toBeVisible();
 
   await page.getByRole("button",{name :"Checkout"}).click();
 
   await page.getByPlaceholder("Select Country").pressSequentially("ind");
 
   await page.getByRole("button",{name :"India"}).nth(1).click();
   await page.getByText("PLACE ORDER").click();
 
   await expect(page.getByText("Thankyou for the order.")).toBeVisible();
});

