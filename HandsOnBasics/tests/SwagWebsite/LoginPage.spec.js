const {test, expect, chromium} = require('@playwright/test')
let userName, userPassword;

//storing all the values
//"context" and "page" fixtures are not supported in "beforeAll
  // const browser = await chromium.launch();
    // const context = await browser.newContext();
    // const page = await context.newPage();
test.beforeEach(async({page})=>{
  
    await page.goto('https://www.saucedemo.com/');
    //.innerText -> return only visible text
    const userList = await page.locator('#login_credentials').innerText();
    console.log(userList);
    userName = userList
                    .split('\n') //new line
                    .map(name => name.trim()) //removing whitespaces
                    //filter return array while find return value
                    .find(name =>name.includes('_out')); 
    console.log(userName);
    const passwordText = await page.locator('.login_password').innerText();
    userPassword = passwordText
                    .split('\n')
                    .map(t => t.trim())
                    .find(t => t.includes('sauce'));
    console.log(userPassword);

}) 

//TC-1 Valid Page
test('Valid Page',async({page}) =>{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill(userName);
    //assertion on username
    await expect(page.getByPlaceholder('Username')).toHaveValue(userName);

    await page.getByPlaceholder('Password').fill(userPassword);
    await expect(page.getByPlaceholder('Password')).toHaveValue(userPassword);

    await page.locator('#login-button').click();
})

//Tc-2 Invalid Credentials
test('Invalid Page',async({page}) =>{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('new-Member');
    //assertion on username
    await expect(page.getByPlaceholder('Username')).toHaveValue('new-Member');

    await page.getByPlaceholder('Password').fill('hehehehehe');
    await expect(page.getByPlaceholder('Password')).toHaveValue('hehehehehe');

    await page.locator('#login-button').click();
    const error = await page.getByRole('heading', { name: 'Epic sadface: Username and password do not match any user in this service' }).textContent();
    console.log(error);

})

//Tc-3 Empty Username
test('Empty Username',async({page}) =>{
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#login-button').click();
    const error = await page.getByRole('heading', { name: 'Epic sadface: Username is required' }).textContent();
    console.log(error);

})

//TC-4 Enter Key Submission 
test('Enter Key',async({page}) =>{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('new-Member');
    //assertion on username
    await expect(page.getByPlaceholder('Username')).toHaveValue('new-Member');

    await page.getByPlaceholder('Password').fill('hehehehehe');
    await expect(page.getByPlaceholder('Password')).toHaveValue('hehehehehe');

    await page.locator('#login-button').press('Enter');

})