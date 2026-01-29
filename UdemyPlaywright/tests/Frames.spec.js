const{test, expect} = require("@playwright/test")

test("Frames", async({page}) =>{
    /*
    What is frames: mainframe  -> childframe
    html over html
    //check using inspect -> iframetagname
    */
   await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
   //switching into frame
   const framePage = page.frameLocator("#courses-iframe");
   // 2 elements and 1 of them is hidden
   await framePage.locator("li a[href*='lifetime-access']:visible").click();
   const num= await framePage.locator(".text h2").textContent();
   console.log(num.split(" ")[1]);

})