import {Page, Locator, expect} from "@playwright/test";
import testDataJson from '../utils/registerLogin.json';

type TestData = typeof testDataJson;
const testData: TestData = JSON.parse(JSON.stringify(testDataJson));

export class Register{  
    page: Page;
    username: Locator;
    email: Locator;
    password: Locator;
    regButton: Locator;
    register: Locator;
    logButton: Locator;
    BaseURL: string = 'https://yespapahandmade.com/';

    constructor(page: Page){
        this.page = page;
        this.register = this.page.getByRole('link', { name: 'Register' });
        this.logButton = this.page.getByRole('button', { name: 'Log in' });
        this.username = this.page.locator('#reg_username');
        this.email = this.page.locator('#reg_email');
        this.password = this.page.locator('#reg_password');
        this.regButton = this.page.getByRole('button', { name: 'Register' });
    }
    
    async navigateToPage(endpoint: string){
        await this.page.goto(`${this.BaseURL}${endpoint}`);
    }
    
    async fillRegistrationDetails(){
        await this.register.click();
        await this.username.fill(testData.username);
        await this.email.fill(testData.email);
        await this.password.fill(testData.password);
        await this.regButton.click();
    }

    async verifyRegistrationSuccess(){
        const checkUserName = this.page.locator('.name');
        
        await expect(checkUserName).toBeVisible();
        await expect(checkUserName).toHaveText(testData.username);
    }

}

export default Register;