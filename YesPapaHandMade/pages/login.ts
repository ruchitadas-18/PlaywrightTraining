import {Page, Locator, expect} from "@playwright/test";
import testDataJson from '../utils/registerLogin.json';

type TestData = typeof testDataJson;
const testData: TestData = JSON.parse(JSON.stringify(testDataJson));


class Login{
    page: Page;
    username: Locator;
    password: Locator;
    rememberMe: Locator;
    logButton: Locator;
    BaseURL: string = 'https://yespapahandmade.com/';

    constructor(page: Page){
        this.page = page;
        this.username = this.page.locator('#username');
        this.password = this.page.locator('#password');
        this.rememberMe = this.page.locator('#rememberme');
        this.logButton = this.page.getByRole('button', { name: 'Log in' });
    }   

    async navigateToPage(endpoint: string){
        await this.page.goto(`${this.BaseURL}${endpoint}`);
    }

    async fillLoginDetails(){
        await this.username.fill(testData.username);
        await this.password.fill(testData.password);
        await this.rememberMe.check();
        await this.logButton.click();
    }
    
    async verifyLoginSuccess() {
        const CheckuserName = this.page.locator('.name');

        await expect(CheckuserName).toBeVisible();
        await expect(CheckuserName).toHaveText(testData.username);
    }
    
}

export default Login;