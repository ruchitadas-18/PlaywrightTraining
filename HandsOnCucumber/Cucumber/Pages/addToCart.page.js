class AddToCartPage {
    constructor(page){
        this.page = page;
        this.alertText = this.page.locator('.content');
        this.alertAddedToCart = page.getByRole('link', { name: 'shopping cart' }); 
        this.cartIcon = this.page.locator('#topcartlink');
        this.cartItems = this.page.locator('.cart-item');
        this.removeButton = this.page.locator('.remove-from-cart');
    }

    async getAlertText(){
        return await this.alertText;
    }

    async getAlertShoppingCart(){
        await this.alertAddedToCart.click();
    }

    async clickCartIcon(){
        await this.cartIcon.click();
    }

    async getCartItemsCount(){
        return await this.cartItems.count();
    }

    async removeItemFromCart(itemName){
        await this.removeButton.filter({ hasText: itemName }).click();
    }
}