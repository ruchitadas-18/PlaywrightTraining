import { Page, Locator, expect } from "@playwright/test";

export class Dashboard {
    page: Page;
    dashboard: Locator;
    banner: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dashboard = this.page.getByAltText("Yes Papa Handmade");
        this.banner = this.page.locator(".n2-ss-slide-backgrounds");
    }

    async navigateToDashboard() {
        await this.dashboard.click();
        await expect(this.banner).toBeVisible({ timeout: 10000 });
    }

    async addToCart(productName: string) {
        const productCard = this.page
            .locator('.woo-entry-inner')
            .filter({ hasText: productName })
            .first();

        const productTitle = productCard.locator('.title').filter({ hasText: productName });
        await expect(productTitle).toHaveText(productName);
        await productTitle.hover();
        const cartButton = productCard.locator('a.add_to_cart_button');
        await cartButton.click();

        await this.page.waitForLoadState('networkidle');
    }
}

export default Dashboard;