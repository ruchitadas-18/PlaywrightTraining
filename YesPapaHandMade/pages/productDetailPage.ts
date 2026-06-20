import {Page,Locator, expect} from '@playwright/test';

export class ProductDetailPage {
    page:Page;
    selectProductName:Locator
    addToCartButton:Locator;
    viewCartButton:Locator;
    quantityInput:Locator;

    constructor(page:Page){
        this.page = page;
        this.selectProductName = page.locator('woo-selected-variation-item-name');
        this.addToCartButton = this.page.getByRole('button', { name: 'Add to cart', exact: true });
        this.viewCartButton = this.page.getByRole('link', { name: 'View cart' });
        this.quantityInput = this.page.getByRole('spinbutton', { name: 'Product quantity' });
    }

    async selectProduct(){
        const product = this.page.getByRole('radio', { name: 'VCK009' });
        await product.click();
    }

    async clickAddToCart(){
        await this.addToCartButton.click();
    }

    async viewCart(){
        await expect(this.viewCartButton).toBeVisible();
        await this.viewCartButton.click();
    }
    
    async addQuantity(quantity: number) {
        await this.quantityInput.fill(String(quantity));
    }

}

export default ProductDetailPage;
