const {Given, When, Then} = require('@cucumber/cucumber');
const RegisterPage = require('../Pages/register.page');
let registerPage;

Given('user is on the registration page', async function () {       
  registerPage = new RegisterPage(this.page);
  return registerPage.navigateToWebsite();  
});

When('user fill in the enter personal details {string},{string}, {string}, {string}', async function (firstName, lastName, email, password) {
  return registerPage.enterPersonalDetails(firstName, lastName, email, password);
});

When('user select the gender {string}', async function (gender) {   
           // Write code here that turns the phrase above into concrete actions
           return registerPage.selectGender(gender);
});

Then('user click on the register button', async function () {       
           // Write code here that turns the phrase above into concrete actions
           return registerPage.clickRegisterButton();
         });

Then('user should able to continue to the next page', async function () {
           // Write code here that turns the phrase above into concrete actions
  await this.page.pause();
});