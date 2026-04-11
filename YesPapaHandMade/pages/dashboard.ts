import {Page, Locator, expect} from "@playwright/test";

export class Dashboard{
    page: Page;
    dashboard: Locator;

    constructor(page: Page){
        this.page = page;
        this.dashboard = this.page.getByAltText("Yes Papa Handmade");
    }

    async navigateToDashboard(){
        await this.dashboard.click();
    }
}

export default Dashboard;