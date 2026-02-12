import { expect } from '@playwright/test';
class AddItemFixture{

    constructor(page){
        this.page = page;
    }

    async addToCart(productName) {
        await this.page
                    .locator('.inventory_item')
                    .filter({ hasText: productName })
                    .getByRole('button', { name: 'Add to cart' })
                    .click();
    }
    
    async expectCartCount(expectedCount) {
        const cartCount = this.page.locator('.shopping_cart_badge');
        await expect(cartCount).toBeVisible();
        await expect(cartCount).toHaveText(expectedCount);
    }
}

module.exports= { AddItemFixture };