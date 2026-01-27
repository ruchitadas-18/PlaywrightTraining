//Assignment --> Login into client side and fetch 1 element
const {test, expect}=require('@playwright/test')

test.only('Login into client dashboard',async({page}) =>{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    
    //storing the locators
    const emailName = "gihiw10644@gxuzi.com";
    const email= page.locator('#userEmail');
    const password = page.locator("[type='password']");
    const signButton = page.locator("#login");
    const productName = page.locator(".card-body")

    //enter the details and clicked
    await email.fill("gihiw10644@gxuzi.com");
    await password.fill("3hUh8rkg!8.Yxs$");
    await signButton.click();

    //after get all product api is called -> all the elements are visible
    //waiting for all the cards are successfully loaded 
    //await page.waitForLoadState('networkidle'); // it can be flasky
    //different approach
    await page.locator(".card-body b").first().waitFor(); // only wait for 1 element
    console.log(await page.locator(".card-body b").allTextContents());

    //fetching the first element
    //console.log(await productName.first().textContent());

    //searching the element via name
    const count = await productName.count();
    for(let i =0; i<count; ++i){
        if(await productName.nth(i).locator("b").textContent() == "ADIDAS ORIGINAL"){
            //locator using name of button
            await productName.nth(i).locator("text = Add To Cart").click();
            break;
        }
    }
    
    await page.locator("[routerlink*='cart']").click();
    
    //waiting for all added item is loaded
    //can not use wait for all elements
    await page.locator("div li").first().waitFor();
    //this is not css --> playwright -> only for elemwnt h3
    //check weather the item is visible or not
    const bool = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
    expect(bool).toBeTruthy(); 

    await page.locator("text=Checkout").click();

    //entering personal details
    await page.locator("[value*='4542']").fill("1234567890");
    const monthDropdown =page.locator("select.input.ddl").first();
    await monthDropdown.selectOption("11");

    const dateDropdown = page.locator("select.input.ddl").last();
    await dateDropdown.selectOption("21");

    await page.locator('input[type="text"]').nth(1).fill("123");
    await page.locator('input[type="text"]').nth(2).fill("New Born");

    //assertion for email
   expect(page.locator(".user__name [type='text']").first()).toHaveText(emailName);
    //dropdown
    //fill is not suitable -> since it will enter togther -> intoduce pressSequence
    //Presssequencially may fail due to heavy traffic. Therefore need to add delays
    //pressSequentially("india",{delay = 150})
    await page.locator("[placeholder*='Country']").pressSequentially("ind",{delay:150});

    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();
    const optionCount = await dropdown.locator("button").count();

     for (let i = 0; i < optionCount; ++i) {
        const text = await dropdown.locator("button").nth(i).textContent();
        if (text === " India") {
            await dropdown.locator("button").nth(i).click();
            break;
        }
   }
    await page.locator(".action__submit ").click();

    await expect (page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
     const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);
 
   await page.locator("button[routerlink*='myorders']").click();
   //for table
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");

   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();
 
}); 