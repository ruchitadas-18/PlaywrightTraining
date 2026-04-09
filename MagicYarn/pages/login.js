class LoginPage {
    constructor(page){
        this.page = page;   
        this.usernameInput = page.getByPlaceholder("you@email.com");
        this.passwordInput = page.getByPlaceholder("••••••");
        this.loginButton = page.getByRole("button", { name: "Sign In" });
    }

    async login(){
        await this.usernameInput.fill("daxawiy415@indevgo.com");
        await this.passwordInput.fill("3hUh8rkg!8.Yxs$");
        await this.loginButton.click();
    }
    
    async navigate(url){
        await this.page.goto(url);
    }
}

module.exports = LoginPage;