const config = require('../config');
//yipafex639@fentaoba.com
class RegisterPage{
    constructor(page){
        this.page = page;
        this.firstName = page.locator('#FirstName');
        this.lastName = page.locator('#LastName');
        this.email = page.locator('#Email');
        this.password = page.locator('#Password');
        this.confirmPassword = page.locator('#ConfirmPassword');
        this.genderMale = page.getByRole('radio', { name: 'Male', exact: true })
        this.genderFemale = page.getByRole('radio', { name: 'Female' })
        this.registerButton = page.locator('#register-button');
    }

    /*async navigateToWebsite(){
        await this.page.goto(`${this.config.baseUrl}/register`);
    }*/

    async enterPersonalDetails(firstName, lastName, email, password){
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.email.fill(email);
        await this.password.fill(password);
        await this.confirmPassword.fill(password);
    }

    async selectGender(gender){
        if(gender.toLowerCase() === 'male'){
            await this.genderMale.check();
        }   else {          
            await this.genderFemale.check();
        }   
    }

    async clickRegisterButton(){
        await this.registerButton.click();
    }

    async verifyRegistrationSuccess(){
        await expect(this.page.getByText('Your registration completed', { exact: true })).toBeVisible();
        //await this.page.locator("input[value='Continue']").click();
        await this.page.getByRole("button",{name:"Continue"}).click();
    }
}

module.exports = RegisterPage;