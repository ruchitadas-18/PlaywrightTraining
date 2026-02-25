const {Given, When, Then, And} = require('@cucumber/cucumber');
const RegisterPage = require('../Pages/registerPage');
let registerPage;

Given('user is on the registration page', function () {       
  registerPage = new RegisterPage(this.page);
  return registerPage.navigateToWebsite();  
});

When('user fill in the  enter personal details {string},{string}, {string}, {string}', function (firstName, lastName, email, password) {
  return registerPage.enterPersonalDetails(firstName, lastName, email, password);
});

And('user select the gender {string}', function (gender) {   
           // Write code here that turns the phrase above into concrete actions
           return registerPage.selectGender(gender);
});

Then('user click on the register button', function () {       
           // Write code here that turns the phrase above into concrete actions
           return registerPage.clickRegisterButton();
         });

Then('user should able to continue to the next page', async function () {
           // Write code here that turns the phrase above into concrete actions
  await this.page.pause();
});