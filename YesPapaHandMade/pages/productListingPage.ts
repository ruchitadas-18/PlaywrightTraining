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
    productCard: any;
    model: Locator;

    
    constructor(page: Page) {
        this.page = page;
        //this.filterPrice = page.locator('.ui-slider-range');
        this.filterColor = page.locator('.woocommerce-widget-layered-nav-list__item');
        this.gridView = page.locator('#oceanwp-grid');
        this.listView = page.locator('#oceanwp-list');
        this.sortedOptions = page.locator('.orderby');
        this.breadCrumb = page.locator('.trail-item ');
        this.productLocator = this.page.locator('li.product');
        this.model = this.page.locator('.tinv-modal-inner');
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
        } else if (viewType === 'list') {
            await this.listView.click();
        }
    }
    async selectingProduct(productName: string) {
        this.productCard = this.productLocator.filter({ hasText: productName }).first();
        await expect(this.productCard).toBeVisible();
        await this.productCard.hover();
    }

    async wishListProduct(){
        const wishListButton = this.productCard.locator('.woo-wishlist-btn');
        await wishListButton.click();
        await expect(this.model).toBeVisible();
        const closeButton = this.page.locator('.tinvwl_button_close');
        await expect(closeButton).toBeVisible();
        await closeButton.click();
    }

    async addToWishList() {
        const wishListButton = this.productCard.locator('.woo-wishlist-btn');
        await wishListButton.click();
        const modal = this.page.locator('.tinv-modal-inner');
        await expect(modal).toBeVisible();
        const viewWishListButton = this.page.getByRole('button', { name: 'View Wishlist' });
        await expect(viewWishListButton).toBeVisible();
        await viewWishListButton.click();
    }

    async navigateToProductDetails(productName: string) {
        const productLink = this.page.getByRole('link', { name: productName }).first();
        await expect(productLink).toBeVisible();
        await productLink.click();
        //verifying the category change by checking the breadcrumb
        const breadcrumbItem = this.breadCrumb.filter({ hasText: productName });
        await expect(breadcrumbItem).toContainText(productName);
        const text = await breadcrumbItem.textContent(); 
        console.log(text);
    }
}

export default ProductListingPage;