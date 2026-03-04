class ProductDetailPage{
    constructor(page){
        this.page = page;
        this.addToCart = this.page.locator('.add-to-cart-button');
        this.addToWishlist = this.page.locator('.add-to-wishlist-button');
        this.addToCompareList = this.page.locator('.add-to-compare-list-button');
        this.productsizeDropdown = this.page.locator('#product_attribute_5_7_1');
        this.radioButton = this.page.locator('.option-list');
    }

    async clickAddToCart(){
        await this.addToCart.click();
    }       

    async clickAddToWishlist(){
        await this.addToWishlist.click();
    }

    async clickAddToCompareList(){
        await this.addToCompareList.click();
    }

    async getProductSize(){
        await this.productsizeDropdown.selectOption("5X");
    }

    async clickRadioButton(){
        await this.radioButton.first().click();
    }

    //how to identify continue button in registeration
    // how to verify product quantity. 
}