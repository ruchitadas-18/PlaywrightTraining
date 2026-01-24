//test files are known as spec files. so add .spec files

//import annitotaion to import playwright
const {test, expect}=require('@playwright/test')
/*
test('First Playwright', function(){
 //syntax for test
 //Ascyno by nature 
 //explicity wait to avoid others - need to mark them infunction only
 otherwise no effect
 async () => / async function

 fixtures = setting the environment / global variable
like browser
need to add {} braces so that it is identified as playwright braces

if no cookies are required --> playwright understood
syntax: test('First Playwright', async ({page}
})

Want to run only 1 test type .only in function
ex: test.only('page', async({page}))

*/
//work on headless mode


test('First Playwright', async ({browser}) => {

    //chrome - plugins/cookies
    // start the browsers and inject the cookies as well
    const incoginto = await browser.newContext();
    //open web page
    const page = await incoginto.newPage();
    //resuseable component
    const userName = page.locator('#username');
    const cardTitles = page.locator(".card-body a");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/"); 
    // adding assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");

    //locators --> css selector support more
    await page.locator('input#username').fill('learning');
    await page.locator("[type ='password']").fill("Learning@830$3mK2");
    await page.locator("#signInBtn").click();
    
    //extracting the message
    //dynamic html value is changed based on the condition
    //parent will automatically wait for child
    //playwright wait automatically
    console.log(await page.locator("[style*='block']").textContent());
    //assertion to check the message
    await expect(await page.locator("[style*='block']")).toContainText('Incorrect');

    //resuse locator
    //remove the already entered text
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await page.locator("#signInBtn").click();
    console.log(await page.locator(".card-body a").nth(0).textContent());

    //if I comment the index -> then it become flasky test
    /*
    playwright wait for the dom
    once it is attached it start working on it
    waiting for the first elements

    but for all elements -> playwright do not have any action
    so it  will not wait - so it is not sync
    why? ---> all elements are in array --> and do not wait for loaded
    will return an empty array so we need 1st elment to get not found error
    so it understand page is not loaded
    */

    //listing all the product
    const allTitles=  await cardTitles.allTextContents;
    console.log(allTitles);
 
    
});

