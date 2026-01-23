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
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/"); 
    // adding assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
});