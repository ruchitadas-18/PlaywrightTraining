class Dashboard {
    constructor(page) {
        this.page = page
        this.products = page.locator(".card-body");
        this.productsText = page.locator(".card-body b");
        this.cartButton = page.locator("[routerlink*='cart']");
        this.checkoutButton = page.locator("text=Checkout");
        this.emailText = page.locator(".user__name [type='text']").first();
        this.countryText = page.locator("[placeholder*='Country']");
        this.submitButton = page.locator(".action__submit ");
    }

    async searchProduct(productName) {
       
        const title = await this.productsText.allTextContents();

        const count = await this.products.count();
        for(let i =0; i<count; ++i){
            if(await this.products.nth(i).locator("b").textContent() == productName){
                //locator using name of button
                await this.products.nth(i).locator("text = Add To Cart").click();
                break;
            }
        }
    }

    async navigateToCart(){
        await this.cartButton.click();
    }
}

module.exports = Dashboard;