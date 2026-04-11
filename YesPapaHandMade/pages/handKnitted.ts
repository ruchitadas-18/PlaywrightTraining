import {Page} from "@playwright/test";

export class HandKnittedPage {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }

}

export default HandKnittedPage;