import {expect, Locator, Page} from "@playwright/test";
import FilterCategoryOptions from "../utils/filterCategoryOptions.json";

type FilterCategoryOptionsType = typeof FilterCategoryOptions;
const filterCategoryOptions: FilterCategoryOptionsType = JSON.parse(JSON.stringify(FilterCategoryOptions));

export class ProductListingPage {
    page: Page;
    //filterPrice: Locator; Need Help
    filterColor: Locator;
    gridView: Locator;
    listView: Locator;
    sortedOptions: Locator;
    breadCrumb: Locator;
    productLocator: Locator;

    
    constructor(page: Page) {
        this.page = page;
        //this.filterPrice = page.locator('.ui-slider-range');
        this.filterColor = page.locator('.woocommerce-widget-layered-nav-list__item');
        this.gridView = page.locator('#oceanwp-grid');
        this.listView = page.locator('#oceanwp-list');
        this.sortedOptions = page.locator('.orderby');
        this.breadCrumb = page.locator('.trail-item ');
        this.productLocator = this.page.locator(".product .woo-product-info .title");
    }

    async changeCategory(expectedCategory: string) {
        //filtering the category based on user
        const categorySelector = filterCategoryOptions[expectedCategory as keyof FilterCategoryOptionsType];
        const categoryLocator = this.page.locator(categorySelector);
        await categoryLocator.click();

        //verifying the category change by checking the breadcrumb
        const breadcrumbItem = this.breadCrumb.filter({ hasText: expectedCategory });
        await expect(breadcrumbItem).toContainText(expectedCategory);
        const text = await breadcrumbItem.textContent(); 
        console.log(text);
    }

    async changeView(viewType: 'grid' | 'list') {
        if (viewType === 'grid') {
            await this.gridView.click();
            // Add assertions to verify grid view is applied
            //await expect(this.page.locator('.container')).toHaveClass(/grid-view/);
        } else if (viewType === 'list') {
            await this.listView.click();
            // Add assertions to verify list view is applied
            //await expect(this.page.locator('.container')).toHaveClass(/list-view/);
        }
    }

    async wishListProduct(productName: string) {
        const productCard = this.page.locator('li.product').filter({ hasText: productName }).first();

        await expect(productCard).toBeVisible();
        await productCard.hover();

        const wishListButton = productCard.locator('.woo-wishlist-btn');
        await wishListButton.click();

        //await this.page.pause();
        const modal = this.page.locator('.tinv-modal-inner');
        await expect(modal).toBeVisible();

        const closeButton = this.page.locator('.tinvwl_button_close');
        await expect(closeButton).toBeVisible();

        await closeButton.click();
    }

    //async addToCart(productName: string) {

}

export default ProductListingPage;