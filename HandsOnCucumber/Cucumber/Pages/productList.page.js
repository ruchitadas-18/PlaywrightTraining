class ProductListPage {
    constructor(page){
        this.page = page;
        this.productList = this.page.locator('.product-title a');
        this.categoryName = this.page.locator('.top-menu');
        this.displayProducts = this.page.locator('#products-pagesize');
        this.addToCart = this.page.locator('.product-box-add-to-cart-button');  
    }

    async clickOnProduct(productName){
        await this.productList.filter({ hasText: productName }).click();
    }

    async clickOnCategory(categoryName){
        await this.categoryName.filter({ hasText: categoryName }).click();
    }

    async selectDisplayProducts(count){
        await this.displayProducts.selectOption(count);
    }

    async clickAddToCart(productName){
        await this.addToCart.filter({ hasText: productName }).click();
    }



}

module.exports = ProductListPage