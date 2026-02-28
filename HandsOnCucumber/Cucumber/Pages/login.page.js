class LoginPage {

    constructor(page) {
        this.page = page;
        this.email = page.locator('.email');
        this.password = page.locator('.password');
        this.loginButton = page.locator('.login-button');
    }

    async credentials(email, password) {
        await this.email.fill(email);
        await this.password.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async verifyLogin() {
        return await this.page.locator('.topic-html-content-header');
    }


}

module.exports = LoginPage;