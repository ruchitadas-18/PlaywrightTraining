import {Page, Locator, expect} from "@playwright/test";
import testDataJson from '../utils/registerLogin.json';

export type User = {
    id: string;
    username: string;
    email: string;
    password: string;
}

class Login{
    page: Page;
    username: Locator;
    password: Locator;
    rememberMe: Locator;
    logButton: Locator;
    BaseURL: string = 'https://yespapahandmade.com/';

    static readonly users: User[] = testDataJson.users;

    constructor(page: Page){
        this.page = page;
        this.username = this.page.locator('#username');
        this.password = this.page.locator('#password');
        this.rememberMe = this.page.locator('#rememberme');
        this.logButton = this.page.getByRole('button', { name: 'Log in' });
    }   

    static getUserById(id: string): User {
        const user = testDataJson.users.find(u => u.id === id);
        if (!user) throw new Error(`❌ User with ID "${id}" not found`);
        return user;
    }

    async navigateToPage(endpoint: string){
        await this.page.goto(`${this.BaseURL}${endpoint}`);
    }

    async fillLoginDetails(user: User){
        await this.username.fill(user.username);
        await this.password.fill(user.password);
        await this.rememberMe.check();
        await this.logButton.click();
    }
    
    async verifyLoginSuccess(user:User) {
        const CheckuserName = this.page.locator('.name');

        await expect(CheckuserName).toBeVisible();
        await expect(CheckuserName).toHaveText(user.username);
    }
    
}

export default Login;