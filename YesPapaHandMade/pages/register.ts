import {Page, Locator, expect} from "@playwright/test";
import {faker} from '@faker-js/faker'

export class Register{  
    page: Page;
    username: Locator;
    email: Locator;
    password: Locator;
    regButton: Locator;
    register: Locator;
    logButton: Locator;
    BaseURL: string = 'https://yespapahandmade.com/';
    randomUserName: string = faker.internet.username();
    maxTry: number = 2;

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
        await this.username.fill(this.randomUserName);
        await this.email.fill(faker.internet.email());
        await this.password.fill(faker.internet.password());
        for(let i = 0; i < this.maxTry; i++){
            await this.regButton.click();
        }

    }

    async verifyRegistrationSuccess(){
        await this.page.waitForURL(`${this.BaseURL}my-account/`, { timeout: 10000 });
        const checkUserName = this.page.getByText(this.randomUserName).nth(2)
        
        await expect(checkUserName).toBeVisible();
        await expect(checkUserName).toHaveText(this.randomUserName);
    }

}

export default Register;