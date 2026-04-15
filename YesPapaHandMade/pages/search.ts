import {Page, Locator, expect} from '@playwright/test';

export class SearchPage {
    page: Page;
    searchResultText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchResultText = page.locator('.page-header-title');
    }   
    async searchResults() {
        await expect(this.searchResultText).toBeVisible();
    }

   async lookForProduct(productName: string) {
        const productCard = this.page.locator('article', {has: this.page.getByRole('heading', { name: productName })}).first();

        await expect(productCard).toBeVisible();

        await Promise.all([productCard.getByRole('link', { name: /Continue Reading/i }).click()]);
        await expect(this.page.getByRole('heading', { level: 1 })).toHaveText(productName);
    }
}

export default SearchPage;