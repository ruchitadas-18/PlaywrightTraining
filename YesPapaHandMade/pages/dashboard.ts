import {Page, Locator, expect} from "@playwright/test";

export class Dashboard{
    page: Page;
    dashboard: Locator;
    banner: Locator;

    constructor(page: Page){
        this.page = page;
        this.dashboard = this.page.getByAltText("Yes Papa Handmade");
        this.banner = this.page.locator(".n2-ss-slide-backgrounds");
    }

    async navigateToDashboard(){
        await this.dashboard.click();
        await expect(this.banner).toBeVisible();
    }
}

export default Dashboard;